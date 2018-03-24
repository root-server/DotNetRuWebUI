import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'bypassSecurityTrustResourceUrl' })
export class BypassSecurityTrustResourceUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    public transform(value: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}
