import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ engine: 'InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci' })
export class Music extends BaseEntity {
    @PrimaryColumn({ type: 'bigint', width: 20 })
    guild_id!: string;

    @PrimaryColumn({ type: 'tinyint' })
    music_id!: number;

    @Column({ type: 'varchar', width: 255, nullable: false })
    title!: string;

    @Column({ type: 'varchar', width: 255, nullable: false })
    url!: string;

    @CreateDateColumn({ type: 'datetime', nullable: false })
    createdAt!: Date;
}