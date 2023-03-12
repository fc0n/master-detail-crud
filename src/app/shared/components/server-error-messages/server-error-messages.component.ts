import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-error-messages',
  templateUrl: './server-error-messages.component.html'
})
export class ServerErrorMessagesComponent {

  @Input('server-error-messages') serveErrorMessages: string[] = null;

}
