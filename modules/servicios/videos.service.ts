import { VideoDtoResponse } from "../dto/dtoRespuestas/dto/video.dto.response";
import { VideoEntity } from "../entities/video.entitie";

export class VideoService {
    constructor(
        private readonly VideoRepository: VideoEntity[]
    ) { }

    async getAll() {
        return this.VideoRepository.map(item => VideoDtoResponse.build(item));
    }
}