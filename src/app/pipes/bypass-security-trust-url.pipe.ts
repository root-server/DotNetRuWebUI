import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'bypassSecurityTrustUrl' })
export class BypassSecurityTrustUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    public transform(value: string) {
        return this.sanitizer.bypassSecurityTrustUrl(value);
    }
}
