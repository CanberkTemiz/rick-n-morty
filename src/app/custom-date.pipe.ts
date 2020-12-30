import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'customDate'})
export class CustomDatePipe implements PipeTransform{
    transform(date: string) {
        let formatted = []

        const characterDate = new Date(date.split("T")[0]);      
        const today = new Date();

        
        let time_diff = today.getTime() - characterDate.getTime();
        let day_diff = Math.round(time_diff / (1000 * 3600 * 24));
        
        const years = Math.round(day_diff / 365);

        let totalDays = day_diff % 365;

        const months = Math.round(totalDays/30);
        
        const days = totalDays % 30;

        return `Created ${years} years, ${months} months and ${days} ago`;
    }
}