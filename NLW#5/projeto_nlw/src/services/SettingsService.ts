import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsService {

    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create( { chat, username } : ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        // Select * from settings where username = "username" limit 1;
        const userAlrearyExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlrearyExists) {
            throw new Error("User already exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username,
        });

        await this.settingsRepository.save(settings);

        return settings;
    }
}

export { SettingsService };