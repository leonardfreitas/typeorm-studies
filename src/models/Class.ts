import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Lesson from './Lesson';

@Entity('class')
export default class Class {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    length: 100,
    unique: true,
  })
  public name: string;

  @Column()
  public duration: number;

  @OneToMany(type => Lesson, classe => Class, {
    eager: true,
  })
  public lessons: Lesson[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
