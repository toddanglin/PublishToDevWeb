import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduledPostsService {

  private apiUrlBase = 'https://publishto-dev.azurewebsites.net/api';

  constructor() {
  }

  public async getByUserApiKey(apikey: string): Promise<Array<any>> {
    if (apikey !== '') {

      const payload = {
        apikey: apikey
      };

      const url = `${this.apiUrlBase}/GetUserPosts`;
      const options = this.prepareRequestOptions(payload);

      try {
        const resp = await fetch(url, options);

        if (resp.status !== 200) {
          throw Error(`Error getting posts: ${ await resp.text() }`);
        }

        const json = await resp.json();
        const results = json.results;

        if (results !== undefined) {
          return results;
        } else {
          return new Array(); // Empty result set
        }

      } catch (error) {
        console.warn('Oops. Something happened.', error);

        // TODO: User error message
      }
    }
  }

  public async cancel(post): Promise<boolean> {
    if (post) {

      const payload = {
        apikey: post.apikey,
        id: post.id,
        instanceId: post.instanceId
      };

      const url = `${this.apiUrlBase}/CancelSchedule`;
      const options = this.prepareRequestOptions(payload);

      try {
        const resp = await fetch(url, options);
        const txt = await resp.text();

        if (resp.status !== 200){
          throw Error(`Error cancelling post schedule: ${ txt }`);
        }

        return true;
      } catch (error) {
        console.warn('Oops. Something happened.', error);

        return false;
      }
    }
  }

  private prepareRequestOptions(payload) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(payload)
    };
  }
}
