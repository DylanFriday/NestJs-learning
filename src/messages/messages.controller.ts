import { Controller,Get,Post,Body,Param } from '@nestjs/common';
import { CreateMessageDto } from './DTOS/create-message.dto';
import { MessageService } from './messages.service';
@Controller('messages')
export class MessagesController {
    messagesService : MessageService;
    constructor(){
        //Use dependency injection instead of this code
        this.messagesService = new MessageService();
    }
    @Get()
    listMessage(){
        return this.messagesService.findAll();
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messagesService.create(body.content)
        
    }
    @Get('/:id')
    getMessage(@Param('id') id : string){
        return this.messagesService.findOne(id)
        
    }

}
