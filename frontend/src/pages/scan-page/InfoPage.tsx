import {LinkButton} from "../../components/link-button/link-button";
import {Container} from "../../components/container/container";
import {Button} from "../../components/button/button";
import "./scan-page.css"
import {useEffect, useState} from "react";

type Assembly = {
    id: number,
    cpu: string,
    gpu: string,
    ram: string,
    motherboard: string,
    hdd: string
}

export function InfoPage() {

    return (
        <>
        <div className={"a12 xs12 s12 center"}><h1>PC Update Helper</h1></div>
            <div className={"center"}>
                Скачайте программу по кнопке ниже, запустите скрипт, после этого нажмите на кнопку "Далее".
                </div>
            <div className={"isolated center"}>
            <a href="/path/to/your/file" download>
                <Button>Скачать</Button>
                </a>
            </div>
            <div className={"isolated center"}>
            <LinkButton href={"/app/scan"}>Далее</LinkButton>
                
            </div>
            <div className={"isolated center"}>
                <LinkButton href={"/app/"}>На главную</LinkButton>
            </div>
        </>
    )
}