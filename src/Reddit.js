import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useDropdown from "./useDropdown";
import Results from "./Results";

const Reddit = () => {

    const [posts, setPosts] = useState([])
    const [subreddit, SubredditDropdown] = useDropdown("Subreddit", "all", ["all", "askreddit","funny", "pics", "videos"])

    async function requestPosts(){
      var reqURL = `https://www.reddit.com/r/${subreddit}/.json`

      const response = await fetch(reqURL)
      const json = await response.json()

      console.log(json)

      setPosts(json.data.children || [])
    }

    var post = {
      "approved_at_utc": null,
      "subreddit": "politics",
      "selftext": "Intelligence officials warned House lawmakers last week that Russia was interfering in the 2020 campaign to try to get President Trump re-elected, five people familiar with the matter said, a disclosure to Congress that angered Mr. Trump, who complained that Democrats would use it against him.\n\nThe day after the Feb. 13 briefing to lawmakers, Mr. Trump berated Joseph Maguire, the outgoing acting director of national intelligence, for allowing it to take place, people familiar with the exchange said. Mr. Trump cited the presence in the briefing of Representative Adam B. Schiff, the California Democrat who led the impeachment proceedings against him, as a particular irritant.\n\nDuring the briefing to the House Intelligence Committee, Mr. Trump’s allies challenged the conclusions, arguing that he has been tough on Russia and strengthened European security. Some intelligence officials viewed the briefing as a tactical error, saying that had the official who delivered the conclusion spoken less pointedly or left it out, they would have avoided angering the Republicans.\n\nThat intelligence official, Shelby Pierson, is an aide to Mr. Maguire who has a reputation of delivering intelligence in somewhat blunt terms. The president announced on Wednesday that he was replacing Mr. Maguire with Richard Grenell, the ambassador to Germany and long an aggressively vocal Trump supporter.\n\n---\n\n##Submissions that may interest you\n\nSUBMISSION | DOMAIN\n---|----\n[Report: Intel officials say Russia boosting Trump candidacy](https://apnews.com/4912baca0c4cbc6cb7a3580f4f3c9b96) | apnews.com\n[Intel officials warned House lawmakers Russia is interfering to get Trump reelected: NYT](https://thehill.com/policy/national-security/483967-intel-officials-warned-house-lawmakers-russia-is-interfering-to-get) | thehill.com\n[NYT Report: Russia is interfering in the 2020 election, Putin still favors Trump](https://www.msnbc.com/mtp-daily/watch/nyt-report-russia-is-interfering-in-the-2020-election-putin-still-favors-trump-79107141982) | msnbc.com\n[Report: Intel officials say Russia boosting Trump candidacy](https://lasvegassun.com/news/2020/feb/20/report-intel-officials-say-russia-boosting-trump-c/) | lasvegassun.com\n[Trump Replaced Acting DNI with ‘Gold-Level’ Trump Hotel Member After House Was Briefed on Russia Threat: Report](https://lawandcrime.com/high-profile/trump-replaced-acting-dni-with-gold-level-trump-hotel-member-after-house-was-briefed-on-russia-threat-report/) | lawandcrime.com\n[NYT: Intel officials say Russia interfering in 2020 campaign](https://www.cnn.com/videos/politics/2020/02/20/nyt-intel-official-russia-interfere-2020-campaign-election-haberman-blitzer-tsr-vpx.cnn/video/playlists/top-news-videos/) | cnn.com\n[Russia Is Helping Elect Trump Again, Intel Official Says](https://www.thedailybeast.com/russia-is-helping-elect-trump-again-intel-official-says) | thedailybeast.com\n[Russia trying to get Trump re-elected, intelligence officials reportedly tell Congress](https://www.independent.co.uk/news/world/americas/us-election/russia-trump-2020-election-campaign-support-congress-a9348706.html) | independent.co.uk\n[Lawmakers were briefed that Russia is looking to help Trump win in 2020](https://www.cnn.com/2020/02/20/politics/trump-russia-intelligence-2020/index.html) | cnn.com\n[Russia is working to get Trump reelected, intelligence officials tell House lawmakers in briefing that angers the president](https://www.courant.com/nation-world/ct-nw-nyt-trump-russia-reelection-interference-20200220-ekkyrl57hzfgphvqy35mffoxzi-story.html) | courant.com\n[Trump decided to replace his top spy chief after his aide told Congress that Russia is interfering in 2020 to help Trump win](https://www.businessinsider.com/trump-replaced-spy-chief-after-russia-briefing-election-interference-2020-2) | businessinsider.com\n[Trump Soured On Maguire After Staff Told Congress Russia Is Interfering On His Behalf](https://talkingpointsmemo.com/news/trump-maguire-russia-2020-elections) | talkingpointsmemo.com\n[Russia Backs Trump’s Re-election, and He Fears Democrats Will Exploit Its Support](https://www.nytimes.com/2020/02/20/us/politics/russian-interference-trump-democrats.html) | nytimes.com\n[Trump sacks director of National Intelligence for 'disloyalty' after he briefed that Russia is working to get their stooge elected again.](https://www.theguardian.com/us-news/2020/feb/20/russian-interference-2020-house-warned?CMP=Share_AndroidApp_Copy_to_clipboard) | theguardian.com\n[Russia Meddling Again - Trump Shoots the Messenger](https://www.huffpost.com/entry/trump-joseph-maguire-russia-intelligence_n_5e4f0cb1c5b6b82aa6505704) | huffpost.com\n[U.S. intelligence officials tell lawmakers that Russia is boosting Trump's reelection bid, report says](https://www.latimes.com/world-nation/story/2020-02-20/report-intel-officials-say-russia-boosting-trump-candidacy) | latimes.com\n[Steve Schmidt says Trump not wanting Congress briefed on Russia interference 'An abuse of power'](https://www.msnbc.com/hardball/watch/steve-schmidt-says-trump-not-wanting-congress-briefed-on-russia-interference-an-abuse-of-power-79113797805) | msnbc.com\n[Russia backs Trump’s reelection, and he fears Democrats will exploit its support](https://www.sltrib.com/news/nation-world/2020/02/20/russia-backs-trumps/) | sltrib.com",
      "author_fullname": "t2_onl9u",
      "saved": false,
      "mod_reason_title": null,
      "gilded": 2,
      "clicked": false,
      "title": "Megathread: U.S. Intelligence Told Lawmakers of Russian Strategy to Boost Trump Re-Election",
      "link_flair_richtext": [
      {
      "e": "text",
      "t": "Megathread"
      }
      ],
      "subreddit_name_prefixed": "r/politics",
      "hidden": false,
      "pwls": 6,
      "link_flair_css_class": null,
      "downs": 0,
      "thumbnail_height": null,
      "hide_score": false,
      "name": "t3_f72zp5",
      "quarantine": false,
      "link_flair_text_color": "dark",
      "author_flair_background_color": null,
      "subreddit_type": "public",
      "ups": 12871,
      "total_awards_received": 3,
      "media_embed": {},
      "thumbnail_width": null,
      "author_flair_template_id": null,
      "is_original_content": false,
      "user_reports": [],
      "secure_media": null,
      "is_reddit_media_domain": false,
      "is_meta": false,
      "category": null,
      "secure_media_embed": {},
      "link_flair_text": "Megathread",
      "can_mod_post": false,
      "score": 12871,
      "approved_by": null,
      "author_premium": true,
      "thumbnail": "self",
      "edited": 1582253346,
      "author_flair_css_class": null,
      "author_flair_richtext": [],
      "gildings": {
      "gid_1": 1,
      "gid_2": 2
      },
      "post_hint": "self",
      "content_categories": null,
      "is_self": true,
      "mod_note": null,
      "created": 1582274888,
      "link_flair_type": "richtext",
      "wls": 6,
      "removed_by_category": null,
      "banned_by": null,
      "author_flair_type": "text",
      "domain": "self.politics",
      "allow_live_comments": true,
      "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Intelligence officials warned House lawmakers last week that Russia was interfering in the 2020 campaign to try to get President Trump re-elected, five people familiar with the matter said, a disclosure to Congress that angered Mr. Trump, who complained that Democrats would use it against him.&lt;/p&gt;\n\n&lt;p&gt;The day after the Feb. 13 briefing to lawmakers, Mr. Trump berated Joseph Maguire, the outgoing acting director of national intelligence, for allowing it to take place, people familiar with the exchange said. Mr. Trump cited the presence in the briefing of Representative Adam B. Schiff, the California Democrat who led the impeachment proceedings against him, as a particular irritant.&lt;/p&gt;\n\n&lt;p&gt;During the briefing to the House Intelligence Committee, Mr. Trump’s allies challenged the conclusions, arguing that he has been tough on Russia and strengthened European security. Some intelligence officials viewed the briefing as a tactical error, saying that had the official who delivered the conclusion spoken less pointedly or left it out, they would have avoided angering the Republicans.&lt;/p&gt;\n\n&lt;p&gt;That intelligence official, Shelby Pierson, is an aide to Mr. Maguire who has a reputation of delivering intelligence in somewhat blunt terms. The president announced on Wednesday that he was replacing Mr. Maguire with Richard Grenell, the ambassador to Germany and long an aggressively vocal Trump supporter.&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;h2&gt;Submissions that may interest you&lt;/h2&gt;\n\n&lt;table&gt;&lt;thead&gt;\n&lt;tr&gt;\n&lt;th&gt;SUBMISSION&lt;/th&gt;\n&lt;th&gt;DOMAIN&lt;/th&gt;\n&lt;/tr&gt;\n&lt;/thead&gt;&lt;tbody&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://apnews.com/4912baca0c4cbc6cb7a3580f4f3c9b96\"&gt;Report: Intel officials say Russia boosting Trump candidacy&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;apnews.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://thehill.com/policy/national-security/483967-intel-officials-warned-house-lawmakers-russia-is-interfering-to-get\"&gt;Intel officials warned House lawmakers Russia is interfering to get Trump reelected: NYT&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;thehill.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.msnbc.com/mtp-daily/watch/nyt-report-russia-is-interfering-in-the-2020-election-putin-still-favors-trump-79107141982\"&gt;NYT Report: Russia is interfering in the 2020 election, Putin still favors Trump&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;msnbc.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://lasvegassun.com/news/2020/feb/20/report-intel-officials-say-russia-boosting-trump-c/\"&gt;Report: Intel officials say Russia boosting Trump candidacy&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;lasvegassun.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://lawandcrime.com/high-profile/trump-replaced-acting-dni-with-gold-level-trump-hotel-member-after-house-was-briefed-on-russia-threat-report/\"&gt;Trump Replaced Acting DNI with ‘Gold-Level’ Trump Hotel Member After House Was Briefed on Russia Threat: Report&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;lawandcrime.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.cnn.com/videos/politics/2020/02/20/nyt-intel-official-russia-interfere-2020-campaign-election-haberman-blitzer-tsr-vpx.cnn/video/playlists/top-news-videos/\"&gt;NYT: Intel officials say Russia interfering in 2020 campaign&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;cnn.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.thedailybeast.com/russia-is-helping-elect-trump-again-intel-official-says\"&gt;Russia Is Helping Elect Trump Again, Intel Official Says&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;thedailybeast.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.independent.co.uk/news/world/americas/us-election/russia-trump-2020-election-campaign-support-congress-a9348706.html\"&gt;Russia trying to get Trump re-elected, intelligence officials reportedly tell Congress&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;independent.co.uk&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.cnn.com/2020/02/20/politics/trump-russia-intelligence-2020/index.html\"&gt;Lawmakers were briefed that Russia is looking to help Trump win in 2020&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;cnn.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.courant.com/nation-world/ct-nw-nyt-trump-russia-reelection-interference-20200220-ekkyrl57hzfgphvqy35mffoxzi-story.html\"&gt;Russia is working to get Trump reelected, intelligence officials tell House lawmakers in briefing that angers the president&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;courant.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.businessinsider.com/trump-replaced-spy-chief-after-russia-briefing-election-interference-2020-2\"&gt;Trump decided to replace his top spy chief after his aide told Congress that Russia is interfering in 2020 to help Trump win&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;businessinsider.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://talkingpointsmemo.com/news/trump-maguire-russia-2020-elections\"&gt;Trump Soured On Maguire After Staff Told Congress Russia Is Interfering On His Behalf&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;talkingpointsmemo.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.nytimes.com/2020/02/20/us/politics/russian-interference-trump-democrats.html\"&gt;Russia Backs Trump’s Re-election, and He Fears Democrats Will Exploit Its Support&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;nytimes.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.theguardian.com/us-news/2020/feb/20/russian-interference-2020-house-warned?CMP=Share_AndroidApp_Copy_to_clipboard\"&gt;Trump sacks director of National Intelligence for &amp;#39;disloyalty&amp;#39; after he briefed that Russia is working to get their stooge elected again.&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;theguardian.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.huffpost.com/entry/trump-joseph-maguire-russia-intelligence_n_5e4f0cb1c5b6b82aa6505704\"&gt;Russia Meddling Again - Trump Shoots the Messenger&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;huffpost.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.latimes.com/world-nation/story/2020-02-20/report-intel-officials-say-russia-boosting-trump-candidacy\"&gt;U.S. intelligence officials tell lawmakers that Russia is boosting Trump&amp;#39;s reelection bid, report says&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;latimes.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.msnbc.com/hardball/watch/steve-schmidt-says-trump-not-wanting-congress-briefed-on-russia-interference-an-abuse-of-power-79113797805\"&gt;Steve Schmidt says Trump not wanting Congress briefed on Russia interference &amp;#39;An abuse of power&amp;#39;&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;msnbc.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;tr&gt;\n&lt;td&gt;&lt;a href=\"https://www.sltrib.com/news/nation-world/2020/02/20/russia-backs-trumps/\"&gt;Russia backs Trump’s reelection, and he fears Democrats will exploit its support&lt;/a&gt;&lt;/td&gt;\n&lt;td&gt;sltrib.com&lt;/td&gt;\n&lt;/tr&gt;\n&lt;/tbody&gt;&lt;/table&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
      "likes": null,
      "suggested_sort": "new",
      "banned_at_utc": null,
      "view_count": null,
      "archived": false,
      "no_follow": false,
      "is_crosspostable": false,
      "pinned": false,
      "over_18": false,
      "preview": {
      "images": [
      {
      "source": {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?auto=webp&amp;s=fe5bc2ea9267cff34bcede50025e036f146d992f",
      "width": 3000,
      "height": 1999
      },
      "resolutions": [
      {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=bb4fa264ad631d99984dc175bc2103bceeda56d3",
      "width": 108,
      "height": 71
      },
      {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=168c08a558d730582fc6e43ac0ce65a302ecae67",
      "width": 216,
      "height": 143
      },
      {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d129dd618dc958424a82ad2f80160faf921e38cb",
      "width": 320,
      "height": 213
      },
      {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=1aa3d462b128857dd0b6c9a0b75ebfd1ac88af2a",
      "width": 640,
      "height": 426
      },
      {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=d8530bbfad206a7d39267099f987e699731d274a",
      "width": 960,
      "height": 639
      },
      {
      "url": "https://external-preview.redd.it/UBdVF93ZS_w50WSLqPyzOa-Pm-MwlQY86-1rffeTH4M.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=d28790f9a3bcb2268c95789d0b3a42b61ee206a8",
      "width": 1080,
      "height": 719
      }
      ],
      "variants": {},
      "id": "6AOBHT2qD8FsbxobdnDjrsp_DeaneqcO5GdaHiVjsoU"
      }
      ],
      "enabled": false
      },
      "all_awardings": [
      {
      "count": 2,
      "is_enabled": true,
      "subreddit_id": null,
      "description": "Gives the author a week of Reddit Premium, %{coin_symbol}100 Coins to do with as they please, and shows a Gold Award.",
      "end_date": null,
      "coin_reward": 100,
      "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
      "days_of_premium": 7,
      "coin_price": 500,
      "is_new": false,
      "icon_format": null,
      "award_sub_type": "GLOBAL",
      "resized_icons": [
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
      "width": 16,
      "height": 16
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
      "width": 32,
      "height": 32
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
      "width": 48,
      "height": 48
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
      "width": 64,
      "height": 64
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
      "width": 128,
      "height": 128
      }
      ],
      "icon_height": 512,
      "award_type": "global",
      "start_date": null,
      "days_of_drip_extension": 0,
      "id": "gid_2",
      "icon_width": 512,
      "subreddit_coin_reward": 0,
      "name": "Gold"
      },
      {
      "count": 1,
      "is_enabled": true,
      "subreddit_id": null,
      "description": "Shows the Silver Award... and that's it.",
      "end_date": null,
      "coin_reward": 0,
      "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
      "days_of_premium": 0,
      "coin_price": 100,
      "is_new": false,
      "icon_format": null,
      "award_sub_type": "GLOBAL",
      "resized_icons": [
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
      "width": 16,
      "height": 16
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
      "width": 32,
      "height": 32
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
      "width": 48,
      "height": 48
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
      "width": 64,
      "height": 64
      },
      {
      "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
      "width": 128,
      "height": 128
      }
      ],
      "icon_height": 512,
      "award_type": "global",
      "start_date": null,
      "days_of_drip_extension": 0,
      "id": "gid_1",
      "icon_width": 512,
      "subreddit_coin_reward": 0,
      "name": "Silver"
      }
      ],
      "awarders": [],
      "media_only": false,
      "can_gild": false,
      "spoiler": false,
      "locked": false,
      "author_flair_text": null,
      "visited": false,
      "removed_by": null,
      "num_reports": null,
      "distinguished": "moderator",
      "subreddit_id": "t5_2cneq",
      "mod_reason_by": null,
      "removal_reason": null,
      "link_flair_background_color": "",
      "id": "f72zp5",
      "is_robot_indexable": true,
      "report_reasons": null,
      "author": "PoliticsModeratorBot",
      "discussion_type": null,
      "num_comments": 1766,
      "send_replies": false,
      "whitelist_status": "all_ads",
      "contest_mode": false,
      "mod_reports": [],
      "author_patreon_flair": false,
      "author_flair_text_color": null,
      "permalink": "/r/politics/comments/f72zp5/megathread_us_intelligence_told_lawmakers_of/",
      "parent_whitelist_status": "all_ads",
      "stickied": true,
      "url": "https://www.reddit.com/r/politics/comments/f72zp5/megathread_us_intelligence_told_lawmakers_of/",
      "subreddit_subscribers": 5759163,
      "created_utc": 1582246088,
      "num_crossposts": 4,
      "media": null,
      "is_video": false
      }

    return (
      <div className="search-params">

        <form
          onSubmit = { e => {
            e.preventDefault()
            requestPosts()
          }}
        >

          <SubredditDropdown></SubredditDropdown>
          <button>Submit</button>
        </form>

        <Results posts={posts}/>

        {/* <RedditPost post={post}></RedditPost>
        <RedditPost post={post}></RedditPost>
        <RedditPost post={post}></RedditPost>
        <RedditPost post={post}></RedditPost> */}
      </div>
    )
}

const App = () => {
    return (
      <div className="container">
        <h1>Reddit Front Page</h1>
        <Reddit></Reddit>

      </div>
    );
  };


  ReactDOM.render(<App />, document.getElementById("root"));