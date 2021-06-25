import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {

    constructor() {
        if(!this.id) this.id = uuid()
    }
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @Column()
    user_receiver: string;

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    @Column()
    userSender: string;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @Column()
    created_at: Date;
}

export { Compliment }