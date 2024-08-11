import { VideoController } from "./modules/controller/videos.controller";
import { VideoService } from './modules/servicios/videos.service'
import { VideoEntity } from "./modules/entities/video.entitie";

const repositorio: Array<VideoEntity> = [
    new VideoEntity('sextape', 'xvideos'),
    new VideoEntity('venexxolana', 'puritanas'),
]

const main = async () => {
    const service = new VideoService(repositorio);
    const controller = new VideoController(service);
    return controller.getAll()
}

main().then(res =>{
    res.map(res => console.log(res.name));
});
