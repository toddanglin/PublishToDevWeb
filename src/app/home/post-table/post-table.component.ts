import { Component, OnInit, Input } from '@angular/core';
import { ScheduledPostsService } from '../../services/scheduled-posts.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit {
  public isCancelling = false;
  public cancellingPostId = 0;

  private _posts: Array<any>;
  @Input()
  public get posts(): Array<any> {
    return this._posts;
  }
  public set posts(v: Array<any>) {
    this._posts = v;
  }

  constructor(private postSvc: ScheduledPostsService) { }

  ngOnInit() {
  }

  public async cancel(post) {
    if (post) {
      this.cancellingPostId = post.id;
      this.isCancelling = true;

      try {
        const result = await this.postSvc.cancel(post);

        if (result) {
          post.iscancelled = true;

          // Refresh table
          const refreshResult = await this.postSvc.getByUserApiKey(post.apikey);
          this.posts = refreshResult;
        } else {
          throw Error('Error cancelling post.');
        }
      } catch (error) {
        console.warn('Oops. Something happened.', error);

        // TODO: User error message
      }

      this.isCancelling = false;
      this.cancellingPostId = 0;
    }
  }

}
