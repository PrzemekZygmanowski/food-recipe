/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsOptional } from "class-validator";


export class UpdateDishDTO {
    @IsOptional()
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsNumber()
    servings: number;
    @IsString()
    @IsOptional()
    description?: string;
}