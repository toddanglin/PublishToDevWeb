import { Component, OnInit } from '@angular/core';
import { ScheduledPostsService } from 'src/app/services/scheduled-posts.service';

@Component({
  selector: 'app-user-api-key',
  templateUrl: './user-api-key.component.html',
  styleUrls: ['./user-api-key.component.scss']
})
export class UserApiKeyComponent implements OnInit {
  public isLoading = false;
  public isLoaded = false;
  public isResultsVisible = false;
  public isModalShown = false;
  public txtModalMsg = '';

  // tslint:disable-next-line: max-line-length
  private arrModalMsgs = new Array<string>(
    `<p>Use the <span class="has-text-weight-bold">PublishTo.Dev</span> browser extension to schedule
     unpublished drafts directly on the Dev.To site.
     Simply navigate to an unpublished draft preview, click on the PublishTo.Dev plugin and choose a future
      time to publish.</p><p>The browser extension is available for Chrome and Microsoft Edge (Insider).
       <a href="https://github.com/toddanglin/PublishToDev" target="_blank">Get the unpacked extension on GitHub.</a>
       Or in Chrome, install <a href="https://chrome.google.com/webstore/detail/publishtodev-extension/bohbnpnialpdpgnibbddaaoaklmnjoaa" target="_blank">directly from the Chrome Web Store</a>.</p>`,
    `<p>DevTo API access tokens are available from the user accounts settings page on DevTo. A token is required
     for <span class="has-text-weight-bold">PublishTo.Dev</span> to publish posts on your behalf.</p>
     <p><a href="https://dev.to/settings/account" target="_blank">Go to DevTo account settings</a></p>`,
  );


  private _posts: Array<any>;
  public get posts(): Array<any> {
    return this._posts;
  }
  public set posts(v: Array<any>) {
    this._posts = v;
  }

  public get userapikey(): string {
    return localStorage.getItem('userapikey') || '';
  }
  public set userapikey(v: string) {
    localStorage.setItem('userapikey', v);
  }

  constructor(private postSvc: ScheduledPostsService) { }

  ngOnInit() {
  }

  public showModal(msgIndex) {
    this.isModalShown = true;
    this.txtModalMsg = this.arrModalMsgs[msgIndex];
  }

  public closeModal() {
    this.isModalShown = false;
  }

  public async loadPosts() {
    if (this.userapikey !== '') {
      this.isLoading = true;

      try {
        const results = await this.postSvc.getByUserApiKey(this.userapikey);

        if (results !== undefined) {
          //Show results
          this.posts = results;
        }

        this.isResultsVisible = true;
      } catch (error) {
        console.warn('Oops. Something happened.', error);

        // TODO: User error message
      }

      this.isLoaded = true;
      this.isLoading = false;
    }
  }
}
