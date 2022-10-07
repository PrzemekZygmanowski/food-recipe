/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsOptional } from "class-validator";


export class UpdateDishDTO {
    @IsOptional()
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsNumber({}, { message: 'Servings must be provided' })
    servings: number;
    @IsString()
    @IsOptional()
    description?: string;
}