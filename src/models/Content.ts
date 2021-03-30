import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Lesson from './Lesson';

@Entity('contents')
export default class Content {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public description: string;

  @Column()
  public linkContent: string;

  @OneToOne(type => Lesson, content => Content)
  @JoinColumn()
  public lesson: Lesson;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
