import { VideoService } from "../servicios/videos.service";

export class VideoController {

    constructor(private readonly videoService: VideoService) { }

    async getAll(){
        return await this.videoService.getAll()
    }

}

