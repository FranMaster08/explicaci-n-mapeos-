import { VideoEntity } from "../../../entities/video.entitie";
import { VideoDtoInterface } from "../interface/video.interface";

export class VideoDtoResponse implements VideoDtoInterface {
    public name: string;
    public url: string;
    private constructor(entity: VideoEntity) {
        this.name = entity.nombre;
        this.url = entity.url;;
    }

    public static build(entity: VideoEntity): VideoDtoResponse {
        return new VideoDtoResponse(entity)
    }

}