import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";
import { UsersService } from "../services/UsersService";
import { MessagesService } from "../services/MessageServices";

interface IParams {
    text: string;
    email: string;
}

io.on("connect", (socket) => {
    const connectionService = new ConnectionsService();
    const usersService = new UsersService();
    const messagesService = new MessagesService();


    socket.on("client_first_access", async (params) => {
        const socket_id = socket.id;
        const { text, email } = params as IParams;
        let user_id = null;


        const userExists = await usersService.findByEmail(email);
        if(!userExists) {
            const user = await usersService.create(email);
            
            await connectionService.create({
                socket_id,
                user_id: user.id
            })

            user_id = user.id;
        } else {
            user_id = userExists.id;
            const connection = await connectionService.findByUserId(userExists.id);

            if(!connection) {
                await connectionService.create({
                    socket_id,
                    user_id: userExists.id,
                });
            } else {
                connection.socket_id = socket_id;

                await connectionService.create(connection);
            }


            await connectionService.create({
                socket_id,
                user_id: userExists.id
            })
        }

        await messagesService.create({
            text,
            user_id
        })
        // Past the connection to socket_id, user_id
    });
});