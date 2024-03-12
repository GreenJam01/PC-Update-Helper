import myImage from "../../resourses/logo.png"
import "./header.css"

export function Header(){
	return(
		<header className={"header"}>
            <a className={"header_logo"} href="/app" title={"На главную"}>
                <img width="75" height="75" src={myImage} alt="Main Logo"></img>
            </a>
                <nav className={"navigation"}>
                    <ul className={"navigation_list"}>
                        <li><a className={"navigation_button"} href="/app">На главную</a></li>
                        <li><a className={"navigation_button"} href="/app/upgrade">Улучшить ПК</a></li>
                        <li><a className={"navigation_button"} href="/app/assemble">Конфигурация нового ПК</a></li>
                        <li><a className={"navigation_button"} href="/app/scan">Сохранить сборку</a></li>
                        <li><a className={"navigation_button"} href="/app/create">Что это</a></li>
                        <li><a className={"navigation_button"} href="/app/myassemblies">Мои сборки</a></li>
                        <li><a className={"navigation_button"} href="/app/infopage">Сканировать ПК</a></li>
                    </ul>
                </nav>
            </header>
	)
}