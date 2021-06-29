declare module 'list-discordbot-api' {
    export function getBot(id: string): Promise<getBotResults>;

    export interface getBotResults {
        id: string;
        prefix: string;
        name: string;
        avatarURL: string;
        discriminator: string;
        shortDesc: string;
        totalVote: string;
        website: string | null;
        supportServer: string;
        tags: string[];
        library: string;
        status: string;
        owner: {
            username: string;
            discriminator: string;
        }
    }
}