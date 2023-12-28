using System;
using System.Collections.Generic;
using System.Management;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace getHardwareInformation
{
    internal class Program

    {
        private static async Task<Uri> CreateProductAsync(Hardware product)
        {
            try
            {
                client.DefaultRequestHeaders.Add("Connection", "Keep-Alive");
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls11;
                HttpResponseMessage response = await client.PostAsJsonAsync(
                    "/assemblies", product);
                response.EnsureSuccessStatusCode();

                // return URI of the created resource.
                return response.Headers.Location;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return null;
        }

        private static HttpClient client = new HttpClient();

        private static void Main(string[] args)
        {
            RunAsync().GetAwaiter().GetResult();
        }

        private static async Task RunAsync()
        {
            client.BaseAddress = new Uri("http://localhost:8080/");
            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));
            var hardware = new Hardware
            {
                motherboard = OutputResult(GetOtherInfo("Win32_BaseBoard", "Manufacturer")) + " " + OutputResult(GetOtherInfo("Win32_BaseBoard", "Product")),
                gpu = OutputResult(GetHardwareInfo("Win32_VideoController", "Name")),
                ram = GetOtherInfo("Win32_PhysicalMemory", "Manufacturer")[0] + " "
                      + (double.Parse(GetOtherInfo("Win32_PhysicalMemory", "Capacity")[0]) / 1024 / 1024 / 1024) + " GB "
                      + GetOtherInfo("Win32_PhysicalMemory", "Speed")[0] + "MHz",
                hdd = GetHardwareInfo("Win32_DiskDrive", "Caption")[0],
                cpu = OutputResult(GetHardwareInfo("Win32_Processor", "Name"))
            };
            string fileName = "hardware.json";
            string jsonString = JsonSerializer.Serialize(hardware);
            var result = await CreateProductAsync(hardware);
        }

        public class Hardware
        {
            public string motherboard { get; set; }
            public string gpu { get; set; }
            public string ram { get; set; }
            public string hdd { get; set; }
            public string cpu { get; set; }
        }

        private static List<string> GetHardwareInfo(string WIN32_Class, string ClassItemField)
        {
            List<string> result = new List<string>();

            ManagementObjectSearcher searcher = new ManagementObjectSearcher("SELECT * FROM " + WIN32_Class);

            try
            {
                foreach (ManagementObject obj in searcher.Get())
                {
                    result.Add(obj[ClassItemField].ToString().Trim());
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return result;
        }

        private static List<string> GetOtherInfo(string comp, string par)
        {
            List<string> results = new List<string>();

            string query = $"SELECT * FROM {comp}";
            ManagementObjectSearcher searcher =
                new ManagementObjectSearcher(query);
            foreach (ManagementObject info in searcher.Get())
            {
                results.Add(info.GetPropertyValue(par).ToString());
            }

            return results;
        }

        private static string OutputResult(List<string> result)
        {
            string str = "";
            if (result.Count > 0)
                for (int i = 0; i < result.Count; ++i)
                    str += result[i];
            return str;
        }
    }
}