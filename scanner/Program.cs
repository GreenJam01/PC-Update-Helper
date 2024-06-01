using System.Management;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
namespace ConsoleApp3
{

    class Program
    {
        private static async Task<Uri> CreateProductAsync(Hardware product, string username)
        {
            try
            {
                client.DefaultRequestHeaders.Add("Connection", "Keep-Alive");
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls11;
                HttpResponseMessage response = await client.PostAsJsonAsync(
                    "/post-scanned-assembly?username=" + username, product);
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
            client.BaseAddress = new Uri("https://pc-update-helper-3.onrender.com/");
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            Console.WriteLine("Введите имя пользователя");
            string username = Console.ReadLine();

            var a = OutputResult(GetHardwareInfo("Win32_Processor", "Name"));
            var cpuBrand = "Amd";
            if (a.ToLower().Contains("intel"))
                cpuBrand = "Intel";

            var cpu = new cpu
            {
                brand = cpuBrand,
                frequency = "",
                coresNumber = OutputResult(GetHardwareInfo("Win32_Processor", "NumberOfCores")),
                imgLink = "",
                price = 0,
                visible = false,
                threadsNumber = OutputResult(GetHardwareInfo("Win32_Processor", "NumberOfLogicalProcessors")),
                title = OutputResult(GetHardwareInfo("Win32_Processor", "Name"))
            };
            var gpu = new gpu
            {
                brand = OutputResult(GetHardwareInfo("Win32_VideoController", "AdapterCompatibility")),
                busWidth = "",
                memoryFrequency = "",
                memoryVolume = Math.Round(double.Parse(OutputResult(GetHardwareInfo("Win32_VideoController", "AdapterRAM"))) / 1024 / 1024 / 512).ToString(),
                imgLink = "",
                visible = false,
                price = 0,
                title = OutputResult(GetHardwareInfo("Win32_VideoController", "Name"))
            };
            ManagementObject disk = new ManagementObject("win32_logicaldisk.deviceid=\"c:\"");
            disk.Get();
            var hdd = new hdd
            {
                brand = "",
                imgLink = "",
                price = 0,
                interfacee = "",
                maxReadingSpeed = "",
                maxRecordingSpeed = "",
                visible = false,
                memory = disk["Size"].ToString(),
                ssd = false,
                title = GetHardwareInfo("Win32_DiskDrive", "Caption")[0]
            };
            var motherboard = new motherboard
            {
                brand = "",
                maxMemory = "",
                memoryType = "",
                socket = "",
                visible = false,
                imgLink = "",
                price = 0,
                title = OutputResult(GetOtherInfo("Win32_BaseBoard", "Manufacturer")) + OutputResult(GetOtherInfo("Win32_BaseBoard", "Product"))
            };
            var ram = new ram
            {
                brand = "",
                frequency = GetOtherInfo("Win32_PhysicalMemory", "Speed")[0],
                volume = (double.Parse(GetOtherInfo("Win32_PhysicalMemory", "Capacity")[0]) / 1024 / 1024 / 1024).ToString(),
                visible = false,
                imgLink = "",
                price = 0,
                title = GetOtherInfo("Win32_PhysicalMemory", "Manufacturer")[0]
            };
            var hardware = new Hardware
            {
                cpu = cpu,
                gpu = gpu,
                hdd = hdd,
                motherboard = motherboard,
                ram = ram,
                user = null
            };

            string jsonString = JsonSerializer.Serialize(hardware);
            Console.WriteLine(jsonString);
            var result = await CreateProductAsync(hardware, username);
        }

        public class Hardware
        {
            public motherboard motherboard { get; set; }
            public gpu gpu { get; set; }
            public ram ram { get; set; }
            public hdd hdd { get; set; }
            public cpu cpu { get; set; }
            public user? user { get; set; }
        }
        public class cpu
        {
            public string title { get; set; }
            public bool visible { get; set; }
            public string brand { get; set; }
            public string frequency { get; set; }
            public string coresNumber { get; set; }
            public string threadsNumber { get; set; }
            public string imgLink { get; set; }
            public int price { get; set; }
        }
        public class gpu
        {
            public string title { get; set; }
            public string memoryFrequency { get; set; }
            public string busWidth { get; set; }
            public string memoryVolume { get; set; }
            public string brand { get; set; }
            public string imgLink { get; set; }
            public bool visible { get; set; }
            public int price { get; set; }
        }
        public class hdd
        {
            public string title { get; set; }
            public string brand { get; set; }
            public string memory { get; set; }
            public string maxRecordingSpeed { get; set; }
            public string maxReadingSpeed { get; set; }
            public string interfacee { get; set; }
            public string imgLink { get; set; }
            public bool visible { get; set; }
            public bool ssd { get; set; }
            public int price { get; set; }
        }
        public class motherboard
        {
            public string title { get; set; }
            public string brand { get; set; }
            public string socket { get; set; }
            public string memoryType { get; set; }
            public string imgLink { get; set; }
            public bool visible { get; set; }
            public string maxMemory { get; set; }
            public int price { get; set; }
        }
        public class ram
        {
            public string title { get; set; }
            public string brand { get; set; }
            public string volume { get; set; }
            public string frequency { get; set; }
            public string imgLink { get; set; }
            public bool visible { get; set; }
            public int price { get; set; }
        }
        public class user { }

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