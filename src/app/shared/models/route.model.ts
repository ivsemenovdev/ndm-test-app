// TODO: предлагаю изменить название интерфейса на NetworkRoute, так как возможно будут возникать ошибки при импорте (Route есть в angular/router)
export interface Route {
    uuid: string;
    address: string;
    mask: string;
    gateway: string;
    interface: string;
}