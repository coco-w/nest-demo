import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Graphic {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  structure: string

  @Column()
  config: string

  @Column()
  type: string
}
