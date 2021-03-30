import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Class from './Class';
import Content from './Content';

@Entity('lessons')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public description: string;

  @OneToOne(type => Content, lesson => Lesson)
  public content: Content;

  @ManyToOne(type => Class, lessons => Lesson)
  public classe: Class;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
