import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'postStatus'})
export class PostStatusPipe implements PipeTransform {
  transform(value: any): string {
    let rtrnStatus = '';

    const now = new Date();
    const pubTime = moment(value.pubtime).add(2, 'minutes'); // Add a little buffer so 'Failed' message doesn't display prematurely

    if (value.ispublished) {
        rtrnStatus = 'Published';
    } else if (value.iscancelled) {
        rtrnStatus = 'Cancelled';
    } else if (!value.ispublished && pubTime.isBefore(now)) {
        rtrnStatus = 'Failed';
    } else {
        rtrnStatus = 'Pending';
    }

    return rtrnStatus;
  }
}

@Pipe({name: 'postStatusCss'})
export class PostStatusCssPipe implements PipeTransform {
  transform(value: string): string {
    let rtrnStatus = '';

    switch (value) {
        case 'Published':
            rtrnStatus = 'has-text-primary';
            break;
        case 'Cancelled':
            rtrnStatus = 'has-text-grey-light';
            break;
        case 'Failed':
            rtrnStatus = 'has-text-danger';
            break;
        default:
            break;
    }

    return rtrnStatus;
  }
}
