import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: unknown, ...args: string[]): unknown {
    console.log(value);
    console.log(args);
    let startEmoji = '';
    let endEmoji = '';
    if (args.length === 1) {
      startEmoji = args[0];
    } else if (args.length === 2) {
      startEmoji = args[0];
      endEmoji = args[1];
    }

    return `${startEmoji}${value}${endEmoji}`;
  }

}
