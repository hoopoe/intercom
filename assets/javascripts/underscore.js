




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>underscore/underscore.js at master · jashkenas/underscore</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jashkenas/underscore" name="twitter:title" /><meta content="underscore - JavaScript&amp;#39;s utility _ belt" name="twitter:description" /><meta content="https://0.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?d=https%3A%2F%2Fidenticons.github.com%2Ffd1d83de2517a02d4e221ede9a681432.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://0.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?d=https%3A%2F%2Fidenticons.github.com%2Ffd1d83de2517a02d4e221ede9a681432.png&amp;r=x&amp;s=400" property="og:image" /><meta content="jashkenas/underscore" property="og:title" /><meta content="https://github.com/jashkenas/underscore" property="og:url" /><meta content="underscore - JavaScript&#39;s utility _ belt" property="og:description" />

    <meta name="hostname" content="github-fe134-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87c9373a41) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4FAD4E6E:2EB2:1633FE3:5322F37C" name="octolytics-dimension-request_id" /><meta content="534606" name="octolytics-actor-id" /><meta content="hoopoe" name="octolytics-actor-login" /><meta content="6c89005ac23db7d61e0c220f242af9da2559584948572fbb4c31a77599f1ed95" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="hGzuK1CHC5AA3JPjqu8cF8249nkT3Q6YdLcatIvTOQo=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-7fae3617280cd37074506b354aa2a2c9b21bd2e4.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-a200a186495b1058af3ee61b0c44f9c1c6533e4a.css" media="all" rel="stylesheet" type="text/css" />
    


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-6f9e1cc57084ab3137ccecf8c6458ee8d8c5ec77.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-fa0b0da6918a4e0f4cb02e5e7121d8ead44460ae.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6150dfa6da69f3421e0478e04167365f">

        <link data-pjax-transient rel='permalink' href='/jashkenas/underscore/blob/120283d3ee1f7806bf7987d938a545ae8387ba86/underscore.js'>

  <meta name="description" content="underscore - JavaScript&#39;s utility _ belt" />

  <meta content="4732" name="octolytics-dimension-user_id" /><meta content="jashkenas" name="octolytics-dimension-user_login" /><meta content="349241" name="octolytics-dimension-repository_id" /><meta content="jashkenas/underscore" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="349241" name="octolytics-dimension-repository_network_root_id" /><meta content="jashkenas/underscore" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jashkenas/underscore/commits/master.atom" rel="alternate" title="Recent Commits to underscore:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="hoopoe"
      data-repo="jashkenas/underscore"
      data-branch="master"
      data-sha="0a194ad84c20e5e10990744ae0ffc9b25925c7a6"
  >

    <input type="hidden" name="nwo" value="jashkenas/underscore" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/hoopoe" class="name">
        <img alt="Vladimir" class=" js-avatar" data-user="534606" height="20" src="https://avatars1.githubusercontent.com/u/534606?s=140" width="20" /> hoopoe
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="jashkenas/underscore">This repository</span>
    </li>
      <li>
        <a href="/jashkenas/underscore/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="hGzuK1CHC5AA3JPjqu8cF8249nkT3Q6YdLcatIvTOQo=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="349241" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jashkenas/underscore/watchers">
        633
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/jashkenas/underscore/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar jashkenas/underscore" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/jashkenas/underscore/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star jashkenas/underscore" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/jashkenas/underscore/stargazers">
        10,762
      </a>
  </div>

  </li>


        <li>
          <a href="/jashkenas/underscore/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of jashkenas/underscore to your account" aria-label="Fork your own copy of jashkenas/underscore to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/jashkenas/underscore/network" class="social-count">2,233</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/jashkenas" class="url fn" itemprop="url" rel="author"><span itemprop="title">jashkenas</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/jashkenas/underscore" class="js-current-repository js-repo-home-link">underscore</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jashkenas/underscore" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jashkenas/underscore">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jashkenas/underscore/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /jashkenas/underscore/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>8</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jashkenas/underscore/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /jashkenas/underscore/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jashkenas/underscore/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /jashkenas/underscore/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jashkenas/underscore/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jashkenas/underscore/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jashkenas/underscore/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jashkenas/underscore/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jashkenas/underscore/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jashkenas/underscore/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jashkenas/underscore.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jashkenas/underscore.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:jashkenas/underscore.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jashkenas/underscore.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jashkenas/underscore" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jashkenas/underscore" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/jashkenas/underscore" class="minibutton sidebar-button" title="Save jashkenas/underscore to your computer and use it in GitHub Desktop." aria-label="Save jashkenas/underscore to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/jashkenas/underscore/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jashkenas/underscore as a zip file"
                   title="Download jashkenas/underscore as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b941208548fde1bb703225bcaea65dfd -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jashkenas/underscore/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/blob/GH-349/underscore.js"
                 data-name="GH-349"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="GH-349">GH-349</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/blob/async/underscore.js"
                 data-name="async"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="async">async</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/blob/gh-pages/underscore.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/blob/master/underscore.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.6.0/underscore.js"
                 data-name="1.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.6.0">1.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.5.2/underscore.js"
                 data-name="1.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.5.2">1.5.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.5.1/underscore.js"
                 data-name="1.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.5.1">1.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.5.0/underscore.js"
                 data-name="1.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.5.0">1.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.4.4/underscore.js"
                 data-name="1.4.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.4">1.4.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.4.3/underscore.js"
                 data-name="1.4.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.3">1.4.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.4.2/underscore.js"
                 data-name="1.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.2">1.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.4.1/underscore.js"
                 data-name="1.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.1">1.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.4.0/underscore.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.3.3/underscore.js"
                 data-name="1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.3">1.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.3.2/underscore.js"
                 data-name="1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.2">1.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.3.1/underscore.js"
                 data-name="1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.1">1.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.3.0/underscore.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.2.4/underscore.js"
                 data-name="1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.4">1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.2.3/underscore.js"
                 data-name="1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.3">1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.2.2/underscore.js"
                 data-name="1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.2.1/underscore.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.2.0/underscore.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.7/underscore.js"
                 data-name="1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.7">1.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.6/underscore.js"
                 data-name="1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.6">1.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.5/underscore.js"
                 data-name="1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.5">1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.4/underscore.js"
                 data-name="1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.4">1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.3/underscore.js"
                 data-name="1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.3">1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.2/underscore.js"
                 data-name="1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.2">1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.1/underscore.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.1.0/underscore.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.0.4/underscore.js"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.0.3/underscore.js"
                 data-name="1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.3">1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.0.2/underscore.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.0.1/underscore.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/1.0.0/underscore.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.6.0/underscore.js"
                 data-name="0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.6.0">0.6.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.8/underscore.js"
                 data-name="0.5.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.8">0.5.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.7/underscore.js"
                 data-name="0.5.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.7">0.5.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.6/underscore.js"
                 data-name="0.5.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.6">0.5.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.5/underscore.js"
                 data-name="0.5.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.5">0.5.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.4/underscore.js"
                 data-name="0.5.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.4">0.5.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.3/underscore.js"
                 data-name="0.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.3">0.5.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.2/underscore.js"
                 data-name="0.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.2">0.5.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.1/underscore.js"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.5.0/underscore.js"
                 data-name="0.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.5.0">0.5.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.7/underscore.js"
                 data-name="0.4.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.7">0.4.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.6/underscore.js"
                 data-name="0.4.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.6">0.4.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.5/underscore.js"
                 data-name="0.4.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.5">0.4.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.4/underscore.js"
                 data-name="0.4.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.4">0.4.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.3/underscore.js"
                 data-name="0.4.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.3">0.4.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.2/underscore.js"
                 data-name="0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.2">0.4.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.1/underscore.js"
                 data-name="0.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.1">0.4.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.4.0/underscore.js"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.3.3/underscore.js"
                 data-name="0.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.3">0.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.3.2/underscore.js"
                 data-name="0.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.2">0.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.3.1/underscore.js"
                 data-name="0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.1">0.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.3.0/underscore.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.2.0/underscore.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.1.1/underscore.js"
                 data-name="0.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.1">0.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jashkenas/underscore/tree/0.1.0/underscore.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jashkenas/underscore" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">underscore</span></a></span></span><span class="separator"> / </span><strong class="final-path">underscore.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="underscore.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Michael Ficarra" class="main-avatar js-avatar" data-user="218840" height="24" src="https://1.gravatar.com/avatar/24fb0088507077f7852adaec4f6b679f?d=https%3A%2F%2Fidenticons.github.com%2F106ac9c3387bc1bd28d9e7fc870e9f4b.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/michaelficarra" rel="author">michaelficarra</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-03-12T21:45:41-05:00" title="2014-03-13 10:45:41">March 12, 2014</time>
    <div class="commit-title">
        <a href="/jashkenas/underscore/commit/120283d3ee1f7806bf7987d938a545ae8387ba86" class="message" data-pjax="true" title="use String instead of function(o){ return '' + o; }; thanks @megawac

https://github.com/jashkenas/underscore/commit/a315e9f4473005a8310540b16d565519a9556106#commitcomment-5590098">use String instead of function(o){ return '' + o; }; thanks</a> <a href="https://github.com/megawac" class="user-mention">@megawac</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>118</strong> contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="jashkenas" href="/jashkenas/underscore/commits/master/underscore.js?author=jashkenas"><img alt="Jeremy Ashkenas" class=" js-avatar" data-user="4732" height="20" src="https://0.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?d=https%3A%2F%2Fidenticons.github.com%2Ffd1d83de2517a02d4e221ede9a681432.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="braddunbar" href="/jashkenas/underscore/commits/master/underscore.js?author=braddunbar"><img alt="brad dunbar" class=" js-avatar" data-user="11674" height="20" src="https://1.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?d=https%3A%2F%2Fidenticons.github.com%2Ffc50322932b29b26cfc46fd9a91ec474.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ratbeard" href="/jashkenas/underscore/commits/master/underscore.js?author=ratbeard"><img alt="Mike Frawley" class=" js-avatar" data-user="28356" height="20" src="https://0.gravatar.com/avatar/b6acfba347fcefa47942e2e95ba4d5bc?d=https%3A%2F%2Fidenticons.github.com%2F4c33d297987f155433652f777a4ec2e1.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="michaelficarra" href="/jashkenas/underscore/commits/master/underscore.js?author=michaelficarra"><img alt="Michael Ficarra" class=" js-avatar" data-user="218840" height="20" src="https://1.gravatar.com/avatar/24fb0088507077f7852adaec4f6b679f?d=https%3A%2F%2Fidenticons.github.com%2F106ac9c3387bc1bd28d9e7fc870e9f4b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ryantenney" href="/jashkenas/underscore/commits/master/underscore.js?author=ryantenney"><img alt="Ryan Tenney" class=" js-avatar" data-user="124015" height="20" src="https://0.gravatar.com/avatar/4cfc9597de4269114d9457d02c5a57a5?d=https%3A%2F%2Fidenticons.github.com%2F05b8c1d212f60a76cbe14f877d944548.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jdalton" href="/jashkenas/underscore/commits/master/underscore.js?author=jdalton"><img alt="John-David Dalton" class=" js-avatar" data-user="4303" height="20" src="https://2.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?d=https%3A%2F%2Fidenticons.github.com%2Fb052e2e0c0ad1b2d5036bd56e27d061c.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="davidchambers" href="/jashkenas/underscore/commits/master/underscore.js?author=davidchambers"><img alt="David Chambers" class=" js-avatar" data-user="210406" height="20" src="https://1.gravatar.com/avatar/5f41fa18e9774f1a2ea7c519f476c348?d=https%3A%2F%2Fidenticons.github.com%2F08279130e2d6c07bdb62ed95f3ebfadb.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="almost" href="/jashkenas/underscore/commits/master/underscore.js?author=almost"><img alt="Thomas Parslow" class=" js-avatar" data-user="11125" height="20" src="https://2.gravatar.com/avatar/f54f1980fe7515d4924dff9287b7b83b?d=https%3A%2F%2Fidenticons.github.com%2Fcbca7635077d4074f8d30094a3176972.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="iamnoah" href="/jashkenas/underscore/commits/master/underscore.js?author=iamnoah"><img alt="noah" class=" js-avatar" data-user="139201" height="20" src="https://2.gravatar.com/avatar/755ad21d2059ac3970754edd621ba65b?d=https%3A%2F%2Fidenticons.github.com%2F0e76b08d36d664d55a99a3fdf4a26372.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="octatone" href="/jashkenas/underscore/commits/master/underscore.js?author=octatone"><img alt="Raymond May Jr." class=" js-avatar" data-user="492289" height="20" src="https://1.gravatar.com/avatar/cd68bb8250c974ae2ae20570a53ee89f?d=https%3A%2F%2Fidenticons.github.com%2F130c3237cf2fd897494985c44f14e61a.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mlanza" href="/jashkenas/underscore/commits/master/underscore.js?author=mlanza"><img alt="Mario T. Lanza" class=" js-avatar" data-user="39192" height="20" src="https://0.gravatar.com/avatar/d9e66bb7361fea87a658ceecb2f547d6?d=https%3A%2F%2Fidenticons.github.com%2Fe25bf3c43cedb0dc08164d55cdff9f01.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="AdamCraven" href="/jashkenas/underscore/commits/master/underscore.js?author=AdamCraven"><img alt="Adam Craven" class=" js-avatar" data-user="610638" height="20" src="https://2.gravatar.com/avatar/f86faf334ae10a0ca61abacd35237edc?d=https%3A%2F%2Fidenticons.github.com%2F5ad7578974c563e42bb3554a9857170b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="akre54" href="/jashkenas/underscore/commits/master/underscore.js?author=akre54"><img alt="Adam Krebs" class=" js-avatar" data-user="931368" height="20" src="https://1.gravatar.com/avatar/cdebe55961ee3852f4bb72c0d03e0df5?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd34600c54a2dfcdbf441ea4c3be5a.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="samuelclay" href="/jashkenas/underscore/commits/master/underscore.js?author=samuelclay"><img alt="Samuel Clay" class=" js-avatar" data-user="44229" height="20" src="https://0.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?d=https%3A%2F%2Fidenticons.github.com%2Fbc194b9ebff98250f975040b7d0275ce.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="liuyl" href="/jashkenas/underscore/commits/master/underscore.js?author=liuyl"><img alt="Yulong Liu" class=" js-avatar" data-user="1261809" height="20" src="https://1.gravatar.com/avatar/3b755836424fd31f6b61fa62c416f4fa?d=https%3A%2F%2Fidenticons.github.com%2Fb1fadc82600f7704c8b70586b00ac8b3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="lfac-pt" href="/jashkenas/underscore/commits/master/underscore.js?author=lfac-pt"><img alt="Luís Cardoso" class=" js-avatar" data-user="969146" height="20" src="https://2.gravatar.com/avatar/713df4a0bbe0757adb6a4138ecc135e3?d=https%3A%2F%2Fidenticons.github.com%2Fdb18378e7ec0133db2913a924dc9452b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jrburke" href="/jashkenas/underscore/commits/master/underscore.js?author=jrburke"><img alt="James Burke" class=" js-avatar" data-user="73359" height="20" src="https://0.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?d=https%3A%2F%2Fidenticons.github.com%2F880ab8e3c71a97059c86d7664216bdf3.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="vincentwoo" href="/jashkenas/underscore/commits/master/underscore.js?author=vincentwoo"><img alt="Vincent Woo" class=" js-avatar" data-user="613320" height="20" src="https://1.gravatar.com/avatar/ef261163df50f82a96093054933f8b0b?d=https%3A%2F%2Fidenticons.github.com%2F028fd569aaff7b941e48d306ef07487d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="caseywebdev" href="/jashkenas/underscore/commits/master/underscore.js?author=caseywebdev"><img alt="Casey Foster" class=" js-avatar" data-user="1181237" height="20" src="https://1.gravatar.com/avatar/ca34681a45aff25c58c7c5ce9a8b0a32?d=https%3A%2F%2Fidenticons.github.com%2F41811b33495d114f2a7687f123b64d20.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mehdishojaei" href="/jashkenas/underscore/commits/master/underscore.js?author=mehdishojaei"><img alt="Mehdi Shojaei" class=" js-avatar" data-user="2007598" height="20" src="https://1.gravatar.com/avatar/e25ad4eca1d476337664272445ce5a98?d=https%3A%2F%2Fidenticons.github.com%2F3455051c80baadaae530587f4ef0e8a7.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="kmalakoff" href="/jashkenas/underscore/commits/master/underscore.js?author=kmalakoff"><img alt="Kevin Malakoff" class=" js-avatar" data-user="756520" height="20" src="https://2.gravatar.com/avatar/7fbc882a9fa2d3788da5923bd6ed04c5?d=https%3A%2F%2Fidenticons.github.com%2Fce039308a0de5d364742eaaebe449970.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jasondavies" href="/jashkenas/underscore/commits/master/underscore.js?author=jasondavies"><img alt="Jason Davies" class=" js-avatar" data-user="31223" height="20" src="https://2.gravatar.com/avatar/f9dd9f4c2b8d081b67fe34769e24808e?d=https%3A%2F%2Fidenticons.github.com%2F3e1e19f4445b3d8bf303f4771e6973e6.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="megawac" href="/jashkenas/underscore/commits/master/underscore.js?author=megawac"><img alt="Graeme Yeates" class=" js-avatar" data-user="3475472" height="20" src="https://0.gravatar.com/avatar/940d0af29bc817075f3eb6aacf40254f?d=https%3A%2F%2Fidenticons.github.com%2Fa7340663a6c3047385d38d319f2c6f55.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="spadgos" href="/jashkenas/underscore/commits/master/underscore.js?author=spadgos"><img alt="Nick Fisher" class=" js-avatar" data-user="426222" height="20" src="https://1.gravatar.com/avatar/f092dfd45793e9483281d4205b674823?d=https%3A%2F%2Fidenticons.github.com%2F71a38462c527dd19c16f54d91e732e58.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="lifesinger" href="/jashkenas/underscore/commits/master/underscore.js?author=lifesinger"><img alt="lifesinger" class=" js-avatar" data-user="97227" height="20" src="https://1.gravatar.com/avatar/db33090541526c03c798f82aa0a5dbaa?d=https%3A%2F%2Fidenticons.github.com%2Fc29e2f0d02014ac5e5d125370865fc0d.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="shinuza" href="/jashkenas/underscore/commits/master/underscore.js?author=shinuza"><img alt="Samori Gorse" class=" js-avatar" data-user="137940" height="20" src="https://2.gravatar.com/avatar/a52f06d025152592b923561ae8173674?d=https%3A%2F%2Fidenticons.github.com%2F4c28f36d0e2a2fe7b5f74a22cb077799.png&amp;r=x&amp;s=140" width="20" /></a>

      <a href="#blob_contributors_box" rel="facebox" class="others-text">and others.</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jeremy Ashkenas" class=" js-avatar" data-user="4732" height="24" src="https://0.gravatar.com/avatar/32652ed5b8fbd2ecdb1c78e9ac567b4b?d=https%3A%2F%2Fidenticons.github.com%2Ffd1d83de2517a02d4e221ede9a681432.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jashkenas">jashkenas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="brad dunbar" class=" js-avatar" data-user="11674" height="24" src="https://1.gravatar.com/avatar/0168f51cd822a820c606c259b80e253f?d=https%3A%2F%2Fidenticons.github.com%2Ffc50322932b29b26cfc46fd9a91ec474.png&amp;r=x&amp;s=140" width="24" />
            <a href="/braddunbar">braddunbar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mike Frawley" class=" js-avatar" data-user="28356" height="24" src="https://0.gravatar.com/avatar/b6acfba347fcefa47942e2e95ba4d5bc?d=https%3A%2F%2Fidenticons.github.com%2F4c33d297987f155433652f777a4ec2e1.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ratbeard">ratbeard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Michael Ficarra" class=" js-avatar" data-user="218840" height="24" src="https://1.gravatar.com/avatar/24fb0088507077f7852adaec4f6b679f?d=https%3A%2F%2Fidenticons.github.com%2F106ac9c3387bc1bd28d9e7fc870e9f4b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/michaelficarra">michaelficarra</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Tenney" class=" js-avatar" data-user="124015" height="24" src="https://0.gravatar.com/avatar/4cfc9597de4269114d9457d02c5a57a5?d=https%3A%2F%2Fidenticons.github.com%2F05b8c1d212f60a76cbe14f877d944548.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ryantenney">ryantenney</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John-David Dalton" class=" js-avatar" data-user="4303" height="24" src="https://2.gravatar.com/avatar/299a3d891ff1920b69c364d061007043?d=https%3A%2F%2Fidenticons.github.com%2Fb052e2e0c0ad1b2d5036bd56e27d061c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jdalton">jdalton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Chambers" class=" js-avatar" data-user="210406" height="24" src="https://1.gravatar.com/avatar/5f41fa18e9774f1a2ea7c519f476c348?d=https%3A%2F%2Fidenticons.github.com%2F08279130e2d6c07bdb62ed95f3ebfadb.png&amp;r=x&amp;s=140" width="24" />
            <a href="/davidchambers">davidchambers</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas Parslow" class=" js-avatar" data-user="11125" height="24" src="https://2.gravatar.com/avatar/f54f1980fe7515d4924dff9287b7b83b?d=https%3A%2F%2Fidenticons.github.com%2Fcbca7635077d4074f8d30094a3176972.png&amp;r=x&amp;s=140" width="24" />
            <a href="/almost">almost</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="noah" class=" js-avatar" data-user="139201" height="24" src="https://2.gravatar.com/avatar/755ad21d2059ac3970754edd621ba65b?d=https%3A%2F%2Fidenticons.github.com%2F0e76b08d36d664d55a99a3fdf4a26372.png&amp;r=x&amp;s=140" width="24" />
            <a href="/iamnoah">iamnoah</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Raymond May Jr." class=" js-avatar" data-user="492289" height="24" src="https://1.gravatar.com/avatar/cd68bb8250c974ae2ae20570a53ee89f?d=https%3A%2F%2Fidenticons.github.com%2F130c3237cf2fd897494985c44f14e61a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/octatone">octatone</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mario T. Lanza" class=" js-avatar" data-user="39192" height="24" src="https://0.gravatar.com/avatar/d9e66bb7361fea87a658ceecb2f547d6?d=https%3A%2F%2Fidenticons.github.com%2Fe25bf3c43cedb0dc08164d55cdff9f01.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mlanza">mlanza</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Craven" class=" js-avatar" data-user="610638" height="24" src="https://2.gravatar.com/avatar/f86faf334ae10a0ca61abacd35237edc?d=https%3A%2F%2Fidenticons.github.com%2F5ad7578974c563e42bb3554a9857170b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/AdamCraven">AdamCraven</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Krebs" class=" js-avatar" data-user="931368" height="24" src="https://1.gravatar.com/avatar/cdebe55961ee3852f4bb72c0d03e0df5?d=https%3A%2F%2Fidenticons.github.com%2Fe9cd34600c54a2dfcdbf441ea4c3be5a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/akre54">akre54</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Samuel Clay" class=" js-avatar" data-user="44229" height="24" src="https://0.gravatar.com/avatar/623aae0b4533bc1db9ecc20fe9ea4912?d=https%3A%2F%2Fidenticons.github.com%2Fbc194b9ebff98250f975040b7d0275ce.png&amp;r=x&amp;s=140" width="24" />
            <a href="/samuelclay">samuelclay</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Yulong Liu" class=" js-avatar" data-user="1261809" height="24" src="https://1.gravatar.com/avatar/3b755836424fd31f6b61fa62c416f4fa?d=https%3A%2F%2Fidenticons.github.com%2Fb1fadc82600f7704c8b70586b00ac8b3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/liuyl">liuyl</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Luís Cardoso" class=" js-avatar" data-user="969146" height="24" src="https://2.gravatar.com/avatar/713df4a0bbe0757adb6a4138ecc135e3?d=https%3A%2F%2Fidenticons.github.com%2Fdb18378e7ec0133db2913a924dc9452b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lfac-pt">lfac-pt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="James Burke" class=" js-avatar" data-user="73359" height="24" src="https://0.gravatar.com/avatar/00ac28bdce61e7db41be57fb3b7f3525?d=https%3A%2F%2Fidenticons.github.com%2F880ab8e3c71a97059c86d7664216bdf3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jrburke">jrburke</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vincent Woo" class=" js-avatar" data-user="613320" height="24" src="https://1.gravatar.com/avatar/ef261163df50f82a96093054933f8b0b?d=https%3A%2F%2Fidenticons.github.com%2F028fd569aaff7b941e48d306ef07487d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/vincentwoo">vincentwoo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Casey Foster" class=" js-avatar" data-user="1181237" height="24" src="https://1.gravatar.com/avatar/ca34681a45aff25c58c7c5ce9a8b0a32?d=https%3A%2F%2Fidenticons.github.com%2F41811b33495d114f2a7687f123b64d20.png&amp;r=x&amp;s=140" width="24" />
            <a href="/caseywebdev">caseywebdev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mehdi Shojaei" class=" js-avatar" data-user="2007598" height="24" src="https://1.gravatar.com/avatar/e25ad4eca1d476337664272445ce5a98?d=https%3A%2F%2Fidenticons.github.com%2F3455051c80baadaae530587f4ef0e8a7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mehdishojaei">mehdishojaei</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kevin Malakoff" class=" js-avatar" data-user="756520" height="24" src="https://2.gravatar.com/avatar/7fbc882a9fa2d3788da5923bd6ed04c5?d=https%3A%2F%2Fidenticons.github.com%2Fce039308a0de5d364742eaaebe449970.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kmalakoff">kmalakoff</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jason Davies" class=" js-avatar" data-user="31223" height="24" src="https://2.gravatar.com/avatar/f9dd9f4c2b8d081b67fe34769e24808e?d=https%3A%2F%2Fidenticons.github.com%2F3e1e19f4445b3d8bf303f4771e6973e6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jasondavies">jasondavies</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Graeme Yeates" class=" js-avatar" data-user="3475472" height="24" src="https://0.gravatar.com/avatar/940d0af29bc817075f3eb6aacf40254f?d=https%3A%2F%2Fidenticons.github.com%2Fa7340663a6c3047385d38d319f2c6f55.png&amp;r=x&amp;s=140" width="24" />
            <a href="/megawac">megawac</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nick Fisher" class=" js-avatar" data-user="426222" height="24" src="https://1.gravatar.com/avatar/f092dfd45793e9483281d4205b674823?d=https%3A%2F%2Fidenticons.github.com%2F71a38462c527dd19c16f54d91e732e58.png&amp;r=x&amp;s=140" width="24" />
            <a href="/spadgos">spadgos</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="lifesinger" class=" js-avatar" data-user="97227" height="24" src="https://1.gravatar.com/avatar/db33090541526c03c798f82aa0a5dbaa?d=https%3A%2F%2Fidenticons.github.com%2Fc29e2f0d02014ac5e5d125370865fc0d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lifesinger">lifesinger</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Samori Gorse" class=" js-avatar" data-user="137940" height="24" src="https://2.gravatar.com/avatar/a52f06d025152592b923561ae8173674?d=https%3A%2F%2Fidenticons.github.com%2F4c28f36d0e2a2fe7b5f74a22cb077799.png&amp;r=x&amp;s=140" width="24" />
            <a href="/shinuza">shinuza</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kit Cambridge" class=" js-avatar" data-user="243830" height="24" src="https://2.gravatar.com/avatar/92f971951ab517f93be7866f0cf28777?d=https%3A%2F%2Fidenticons.github.com%2F5023a0d8f7c2681bb9ec0efec39b2d7f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kitcambridge">kitcambridge</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="kishanov" class=" js-avatar" data-user="5998299" height="24" src="https://2.gravatar.com/avatar/610b01597ed45b141ccf1233585d0ce3?d=https%3A%2F%2Fidenticons.github.com%2F53f3a98f40f7e170a3553ed78b1f9d23.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kishanov">kishanov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Van Etten" class=" js-avatar" data-user="949985" height="24" src="https://2.gravatar.com/avatar/fd06cefb959e4e9dfefb35621f4a993e?d=https%3A%2F%2Fidenticons.github.com%2F83df5c73b779ec4d00351606ae73a165.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ryanve">ryanve</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jan Raasch" class=" js-avatar" data-user="425211" height="24" src="https://0.gravatar.com/avatar/f319df404fa1f19916b153a20ae7715c?d=https%3A%2F%2Fidenticons.github.com%2Fca79b94acba4897b90dc2d01f098f445.png&amp;r=x&amp;s=140" width="24" />
            <a href="/janraasch">janraasch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jez Ng" class=" js-avatar" data-user="228496" height="24" src="https://1.gravatar.com/avatar/b20430514c8c4c4c161c51e128f1a7e2?d=https%3A%2F%2Fidenticons.github.com%2Ff95cf02498ad5da1394e35291b8f205d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/int3">int3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff McGee" class=" js-avatar" data-user="212638" height="24" src="https://0.gravatar.com/avatar/f3e64d7e337eb79b66c7110ba5113f07?d=https%3A%2F%2Fidenticons.github.com%2F730c6ab4e9c46f6027572125855b553c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/JeffAMcGee">JeffAMcGee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Elliot Winkler" class=" js-avatar" data-user="7371" height="24" src="https://1.gravatar.com/avatar/e9e852b18079792bc5f4ec52b8e37c53?d=https%3A%2F%2Fidenticons.github.com%2F0d46839f6371fb84f6b6c682f5fc2c77.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mcmire">mcmire</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Blake" class=" js-avatar" data-user="861223" height="24" src="https://0.gravatar.com/avatar/9c52e39ac7ea900d13063e2d55b89347?d=https%3A%2F%2Fidenticons.github.com%2F470fd6d711feb9804a2f6b19977e8e5b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/BlakeSimpson">BlakeSimpson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Malcolm Locke" class=" js-avatar" data-user="169126" height="24" src="https://1.gravatar.com/avatar/d01b85a507aadb79d402e5efd1aa651f?d=https%3A%2F%2Fidenticons.github.com%2F3c6de0f1a6be7d75ef7fa9ce779621e8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/malclocke">malclocke</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jay Phelps" class=" js-avatar" data-user="762949" height="24" src="https://1.gravatar.com/avatar/11949228f54da11ed6dd248cd73a1e00?d=https%3A%2F%2Fidenticons.github.com%2F0f9f59ed5a6745adc05c4fc47248cd06.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jayphelps">jayphelps</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tony Lukasavage" class=" js-avatar" data-user="594112" height="24" src="https://0.gravatar.com/avatar/39ebccd822b6fb533e004ee722c38e9d?d=https%3A%2F%2Fidenticons.github.com%2Fde2b9975e3d34e33637edd1c51a8a306.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tonylukasavage">tonylukasavage</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Oleg Grenrus" class=" js-avatar" data-user="51087" height="24" src="https://1.gravatar.com/avatar/2be2ab74793559ea1c1dbdf55ccdf90b?d=https%3A%2F%2Fidenticons.github.com%2F1c209e031f5ab9e5322af431618f1e8a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/phadej">phadej</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sergey Melnikov" class=" js-avatar" data-user="3513040" height="24" src="https://0.gravatar.com/avatar/537c4fa360c35cfac794934dbe6fc3d4?d=https%3A%2F%2Fidenticons.github.com%2F4a2df8b658403bb3fa9ff427bc7f648e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/smelnikov">smelnikov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mark Hansen" class=" js-avatar" data-user="105529" height="24" src="https://1.gravatar.com/avatar/97c7cb70d1f6c24b47aa9ad809cb2c25?d=https%3A%2F%2Fidenticons.github.com%2F083de0c93add0a646b1b2ef06c476a88.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mhansen">mhansen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mark Story" class=" js-avatar" data-user="24086" height="24" src="https://2.gravatar.com/avatar/669144d1ab0a861af5d54175371bc586?d=https%3A%2F%2Fidenticons.github.com%2F4a55dbdc6c16615070050599ef141d44.png&amp;r=x&amp;s=140" width="24" />
            <a href="/markstory">markstory</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Michael Williamson" class=" js-avatar" data-user="391876" height="24" src="https://0.gravatar.com/avatar/440512e6a49b5310494ecafefe37724f?d=https%3A%2F%2Fidenticons.github.com%2F988b23287e9e081813c7b4597719a228.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mwilliamson">mwilliamson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Elias Zamaria" class=" js-avatar" data-user="510781" height="24" src="https://2.gravatar.com/avatar/df93bdbaaf88550ea285080c3091a3c1?d=https%3A%2F%2Fidenticons.github.com%2F0f8584b630d2db41e0fe5459dd89c025.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mikez302">mikez302</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ming Beckwith" class=" js-avatar" data-user="2942133" height="24" src="https://2.gravatar.com/avatar/56666481ce941d1dd3d280cb1a321e75?d=https%3A%2F%2Fidenticons.github.com%2Fee4afe4fe35f8cf331050c53e609ed60.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mcbex">mcbex</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Liam R. Black" class=" js-avatar" data-user="372491" height="24" src="https://1.gravatar.com/avatar/6d7ed50c6225d607f4653cb14a2ce528?d=https%3A%2F%2Fidenticons.github.com%2F9bb548b501afa0632aeb0bbb0a2b0924.png&amp;r=x&amp;s=140" width="24" />
            <a href="/limeblack">limeblack</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="John Wright" class=" js-avatar" data-user="4343" height="24" src="https://0.gravatar.com/avatar/920e96e39bf30400e9bc7c4a92b1bf00?d=https%3A%2F%2Fidenticons.github.com%2F2000f6325dfc4fc3201fc45ed01c7a5d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mrjjwright">mrjjwright</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Leonard Martin" class=" js-avatar" data-user="117398" height="24" src="https://2.gravatar.com/avatar/40de52a01e73819462ef8fdc924a4d3c?d=https%3A%2F%2Fidenticons.github.com%2F76218e5302bb5271412880b8e32ac3d7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/lennym">lennym</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kyle Robinson Young" class=" js-avatar" data-user="99604" height="24" src="https://2.gravatar.com/avatar/5211ea711bb06482530172f77732f61a?d=https%3A%2F%2Fidenticons.github.com%2Fff1d218cb29c3b93378e14dd2b586987.png&amp;r=x&amp;s=140" width="24" />
            <a href="/shama">shama</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kris Kowal" class=" js-avatar" data-user="60294" height="24" src="https://0.gravatar.com/avatar/3c6753e1e589735a0a3a6d417d9553cd?d=https%3A%2F%2Fidenticons.github.com%2Feb53abba5d9c047f416b3fd7ff491349.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kriskowal">kriskowal</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kim Joar Bekkelund" class=" js-avatar" data-user="5259" height="24" src="https://0.gravatar.com/avatar/6c51c14716e24bc1f1a3fb5ad234e773?d=https%3A%2F%2Fidenticons.github.com%2Ff968fdc88852a4a3a27a81fe3f57bfc5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kjbekkelund">kjbekkelund</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nadav Ivgi" class=" js-avatar" data-user="877904" height="24" src="https://1.gravatar.com/avatar/2922f1fa46e9ca9b70eee958ddcc1704?d=https%3A%2F%2Fidenticons.github.com%2Ff1ff9c2aa98e72021c5c5236b96b128d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/shesek">shesek</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Neil E. Pearson" class=" js-avatar" data-user="692853" height="24" src="https://1.gravatar.com/avatar/dea31f1e80cb4ec53d1e9a7135192d59?d=https%3A%2F%2Fidenticons.github.com%2Fa5cea32f1268534fa005277ffb7b07d5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/hx">hx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kevin Locke" class=" js-avatar" data-user="336433" height="24" src="https://1.gravatar.com/avatar/132e1aa89b96190de8f4ce6569ebb321?d=https%3A%2F%2Fidenticons.github.com%2Fc527f1dd87ad3d49ccc3e38f3c0b6266.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kevinoid">kevinoid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vladimir Kapustin" class=" js-avatar" data-user="467097" height="24" src="https://2.gravatar.com/avatar/0db2fd6ad7f95628b69af69f214d3cc3?d=https%3A%2F%2Fidenticons.github.com%2F64af728038d1687e7b0d68cac0a5661a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/kapooostin">kapooostin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nick Stenning" class=" js-avatar" data-user="3602" height="24" src="https://0.gravatar.com/avatar/7c753fa710877b55f7596b47f5a554b1?d=https%3A%2F%2Fidenticons.github.com%2F228b25587479f2fc7570428e8bcbabdc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/nickstenning">nickstenning</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jesse Pollak" class=" js-avatar" data-user="1097953" height="24" src="https://2.gravatar.com/avatar/659259f8b26765bb49caaac95ef66ab2?d=https%3A%2F%2Fidenticons.github.com%2F7093490ccab1bbdf3a1a4023eb8fe1bd.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jessepollak">jessepollak</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joshua Peek" class=" js-avatar" data-user="137" height="24" src="https://1.gravatar.com/avatar/bbe5dc8dcf248706525ab76f46185520?d=https%3A%2F%2Fidenticons.github.com%2F3988c7f88ebcb58c6ce932b957b6f332.png&amp;r=x&amp;s=140" width="24" />
            <a href="/josh">josh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Nicklas Ansman Giertz" class=" js-avatar" data-user="102883" height="24" src="https://2.gravatar.com/avatar/6e1b4fb1960b220515c1673b728b3794?d=https%3A%2F%2Fidenticons.github.com%2Fb1e0573d4c5102218879e97f10367515.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ansman">ansman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Fogus" class=" js-avatar" data-user="12632" height="24" src="https://2.gravatar.com/avatar/5aa24eee4238e1e964210ed447e8dc91?d=https%3A%2F%2Fidenticons.github.com%2F0d9d154fb5b905d3f6d606f8b6cbb750.png&amp;r=x&amp;s=140" width="24" />
            <a href="/fogus">fogus</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="opensas" class=" js-avatar" data-user="481687" height="24" src="https://1.gravatar.com/avatar/b072fc2897196b3bafcd337bc9c91e2d?d=https%3A%2F%2Fidenticons.github.com%2Fff131d9b18934f724595d0d85f0ad334.png&amp;r=x&amp;s=140" width="24" />
            <a href="/opensas">opensas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Peter Rust" class=" js-avatar" data-user="23037" height="24" src="https://0.gravatar.com/avatar/8487c9b384917933d01bbdd2651cdaf1?d=https%3A%2F%2Fidenticons.github.com%2F4c2aeb849fab47239887f8bf9c8e6278.png&amp;r=x&amp;s=140" width="24" />
            <a href="/prust">prust</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dustin Diaz" class=" js-avatar" data-user="372683" height="24" src="https://1.gravatar.com/avatar/cfac4fc60b4e72258138903daab65b44?d=https%3A%2F%2Fidenticons.github.com%2Ffa4ef607e00dca6f10ad9911ae53c9eb.png&amp;r=x&amp;s=140" width="24" />
            <a href="/ded">ded</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jason Laster" class=" js-avatar" data-user="254562" height="24" src="https://0.gravatar.com/avatar/c23e230acc1f73990d92f810871e4cde?d=https%3A%2F%2Fidenticons.github.com%2Fe6c16d2f1b9d0ebdca33f222ceabeb18.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jasonLaster">jasonLaster</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Peter Jihoon Kim" class=" js-avatar" data-user="30173" height="24" src="https://2.gravatar.com/avatar/2ac28b22a3596136ad31d53553383d9b?d=https%3A%2F%2Fidenticons.github.com%2F9181303866f74e72f4b4b39ffbd6a330.png&amp;r=x&amp;s=140" width="24" />
            <a href="/petejkim">petejkim</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Pier Paolo Ramon" class=" js-avatar" data-user="646609" height="24" src="https://2.gravatar.com/avatar/fc40b1fe79ea6b10825141d86f767354?d=https%3A%2F%2Fidenticons.github.com%2F06dfb488c4d32289dc8d1c4b25ba14b3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/yuchi">yuchi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="李旭东" class=" js-avatar" data-user="571863" height="24" src="https://1.gravatar.com/avatar/b0f2248509917bad37551f9166d589da?d=https%3A%2F%2Fidenticons.github.com%2F9a254c52cd9d637cc68b83e9b4c41630.png&amp;r=x&amp;s=140" width="24" />
            <a href="/stonelee">stonelee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Yi EungJun" class=" js-avatar" data-user="1129852" height="24" src="https://0.gravatar.com/avatar/eeb96ccb9534c7bed6c0dccd4e4f0e5b?d=https%3A%2F%2Fidenticons.github.com%2Fc7bcc83ede825a5e4fadd650728217a5.png&amp;r=x&amp;s=140" width="24" />
            <a href="/npcode">npcode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="HIGASHI Taiju" class=" js-avatar" data-user="95721" height="24" src="https://1.gravatar.com/avatar/5415725875ebac1064e0e979ab149607?d=https%3A%2F%2Fidenticons.github.com%2F94a9b44846143bc18bab943992b72dbc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/taiju">taiju</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Genadi Samokovarov" class=" js-avatar" data-user="604618" height="24" src="https://1.gravatar.com/avatar/1ac5a00efa41cd58c421d3cd98dda7b9?d=https%3A%2F%2Fidenticons.github.com%2F7db396598dab824c7e0c5dc38557aa7d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/gsamokovarov">gsamokovarov</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Glasser" class=" js-avatar" data-user="16724" height="24" src="https://2.gravatar.com/avatar/c7d821986a42c48aff6c10fc030b36bf?d=https%3A%2F%2Fidenticons.github.com%2F4b4035563213d4fc685e4b065326e68e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/glasser">glasser</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sam Gentle" class=" js-avatar" data-user="441426" height="24" src="https://0.gravatar.com/avatar/fbf7977917910666bea05c3ca3c9f2cf?d=https%3A%2F%2Fidenticons.github.com%2F79b3a1e227091ad7ef856b7dc62c813a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/sgentle">sgentle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="sjpsega" class=" js-avatar" data-user="436223" height="24" src="https://2.gravatar.com/avatar/0fb68b62ab5310129058ffe0d8b68abe?d=https%3A%2F%2Fidenticons.github.com%2F503dc62baccd18e725f3ce11b4870a0c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/sjpsega">sjpsega</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="fredericksgary" class=" js-avatar" data-user="135443" height="24" src="https://2.gravatar.com/avatar/b7944342848e4dfee634291c2a58b955?d=https%3A%2F%2Fidenticons.github.com%2Fe540a7ee2ab1ad12482e411915a0465a.png&amp;r=x&amp;s=140" width="24" />
            <a href="/fredericksgary">fredericksgary</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Stuart Knightley" class=" js-avatar" data-user="48019" height="24" src="https://1.gravatar.com/avatar/0e815006aef4a0e79d60df31b654648c?d=https%3A%2F%2Fidenticons.github.com%2F02c1f06978b821b2996ec257932f2947.png&amp;r=x&amp;s=140" width="24" />
            <a href="/Stuk">Stuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Florian Friesdorf" class=" js-avatar" data-user="89596" height="24" src="https://0.gravatar.com/avatar/ca0a29bff44745fb49664b108e29b176?d=https%3A%2F%2Fidenticons.github.com%2Fb400a0697cd643ccc17707ddcc6ca149.png&amp;r=x&amp;s=140" width="24" />
            <a href="/chaoflow">chaoflow</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Rick Fletcher" class=" js-avatar" data-user="39261" height="24" src="https://0.gravatar.com/avatar/b1e65792c33ab7d44028dd0918e92d16?d=https%3A%2F%2Fidenticons.github.com%2Fab73535914798c3ad40ab8bea10188a4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/rfletcher">rfletcher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jakub Wieczorek" class=" js-avatar" data-user="634921" height="24" src="https://1.gravatar.com/avatar/83142992c39bf439ecc0e3534b828cdb?d=https%3A%2F%2Fidenticons.github.com%2Fd09f0025873434358c81db14178fa067.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jakub-">jakub-</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Evan Morikawa" class=" js-avatar" data-user="489001" height="24" src="https://2.gravatar.com/avatar/30ac27c2768b1df077c5f236936bd256?d=https%3A%2F%2Fidenticons.github.com%2F379fa3c8b371de63bc6811659c16c28e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/emorikawa">emorikawa</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Anton Khlynovskiy" class=" js-avatar" data-user="810582" height="24" src="https://0.gravatar.com/avatar/ac8a5e8739b75bda6567a4630b91dd82?d=https%3A%2F%2Fidenticons.github.com%2F597298d75ac78242680024901b61d255.png&amp;r=x&amp;s=140" width="24" />
            <a href="/subzey">subzey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tal Ater" class=" js-avatar" data-user="926653" height="24" src="https://1.gravatar.com/avatar/d85ffb0d167de05d50b33c3889e8a227?d=https%3A%2F%2Fidenticons.github.com%2F2f0970a66e5aacffc57f7ac713ddb4b6.png&amp;r=x&amp;s=140" width="24" />
            <a href="/TalAter">TalAter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Tang" class=" js-avatar" data-user="687449" height="24" src="https://1.gravatar.com/avatar/3ee0127f214793b335a8762acf4b6ab6?d=https%3A%2F%2Fidenticons.github.com%2F6139a9d9930c7b19249107050ad171c2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/skaterdav85">skaterdav85</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dmitry Baranovskiy" class=" js-avatar" data-user="22726" height="24" src="https://1.gravatar.com/avatar/679a33ec2ceb2195591888496d287df8?d=https%3A%2F%2Fidenticons.github.com%2F1cf33fc29c5a7f169cb51d7afe381553.png&amp;r=x&amp;s=140" width="24" />
            <a href="/DmitryBaranovskiy">DmitryBaranovskiy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ted Han" class=" js-avatar" data-user="192" height="24" src="https://2.gravatar.com/avatar/1ed56a3c8445bfafc7a545d9a63175ce?d=https%3A%2F%2Fidenticons.github.com%2F58a2fc6ed39fd083f55d4182bf88826d.png&amp;r=x&amp;s=140" width="24" />
            <a href="/knowtheory">knowtheory</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dan Tillberg" class=" js-avatar" data-user="104587" height="24" src="https://0.gravatar.com/avatar/5e5964a730879969fc63a849f022590a?d=https%3A%2F%2Fidenticons.github.com%2F8af35aa51ceb0830aca4f6ee41ab79ba.png&amp;r=x&amp;s=140" width="24" />
            <a href="/tillberg">tillberg</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Colin T.A. Gray" class=" js-avatar" data-user="27570" height="24" src="https://2.gravatar.com/avatar/0b64b1fd4310148fdb121698cbf58960?d=https%3A%2F%2Fidenticons.github.com%2F69c8c5b08db98c39788c0c5be3f1e8c8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/colinta">colinta</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Leishman" class=" js-avatar" data-user="79651" height="24" src="https://0.gravatar.com/avatar/ffa6eed1e8a9c1b2adb37ca88c07dede?d=https%3A%2F%2Fidenticons.github.com%2Febb361304ba0500b11459331f5e082c3.png&amp;r=x&amp;s=140" width="24" />
            <a href="/cleishm">cleishm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tim Caswell" class=" js-avatar" data-user="89353" height="24" src="https://0.gravatar.com/avatar/c953ddd239707998340e1a6fbb3eeb46?d=https%3A%2F%2Fidenticons.github.com%2F6e87e3566bf2a3c0b3dad33dd319b537.png&amp;r=x&amp;s=140" width="24" />
            <a href="/creationix">creationix</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Bryan Woods" class=" js-avatar" data-user="18175" height="24" src="https://0.gravatar.com/avatar/10610a774494efbb8f8ca5c7a3f33da4?d=https%3A%2F%2Fidenticons.github.com%2Fca5d2301e833bedfa62053bb8210da20.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bryanwoods">bryanwoods</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Bob Remeika" class=" js-avatar" data-user="31485" height="24" src="https://2.gravatar.com/avatar/36aae8e8192ee7bc219782c6c991e846?d=https%3A%2F%2Fidenticons.github.com%2F3ff5ad8918b875387908967a23b9a8d4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/foobarfighter">foobarfighter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jed Schmidt" class=" js-avatar" data-user="4433" height="24" src="https://0.gravatar.com/avatar/afd18bf247216624bd5fdd1b112f0b48?d=https%3A%2F%2Fidenticons.github.com%2F60e1deb043af37db5ea4ce9ae8d2c9ea.png&amp;r=x&amp;s=140" width="24" />
            <a href="/jed">jed</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Bjørn Mæland" class=" js-avatar" data-user="2651" height="24" src="https://1.gravatar.com/avatar/9b63eeb97d978229af5a46eef1ee6c1d?d=https%3A%2F%2Fidenticons.github.com%2F148260a1ce4fe4907df4cd475c442e28.png&amp;r=x&amp;s=140" width="24" />
            <a href="/bmaland">bmaland</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Baynes" class=" js-avatar" data-user="251360" height="24" src="https://1.gravatar.com/avatar/97e29ccac35f946650ecc9a67710fe07?d=https%3A%2F%2Fidenticons.github.com%2F6495633a40047fac6711eae284449f15.png&amp;r=x&amp;s=140" width="24" />
            <a href="/chris-baynes">chris-baynes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Aseem Kishore" class=" js-avatar" data-user="537838" height="24" src="https://0.gravatar.com/avatar/5af2930e39246c8339fa7ad8e394e96e?d=https%3A%2F%2Fidenticons.github.com%2F35b53df5afa2521af4a7b4d64ac64ccc.png&amp;r=x&amp;s=140" width="24" />
            <a href="/aseemk">aseemk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Arlo Breault" class=" js-avatar" data-user="123708" height="24" src="https://0.gravatar.com/avatar/403a6bcf6c06f2694b635a5f108c7101?d=https%3A%2F%2Fidenticons.github.com%2F557c8192dc08b09ba0fde79bf5f4604c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/arlolra">arlolra</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vinay" class=" js-avatar" data-user="603426" height="24" src="https://2.gravatar.com/avatar/cd7a3d8e277219e95f304f4773518b01?d=https%3A%2F%2Fidenticons.github.com%2F172c8a342c220cc9cbc8fdd0212f9130.png&amp;r=x&amp;s=140" width="24" />
            <a href="/vhmth">vhmth</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Hirtle" class=" js-avatar" data-user="438545" height="24" src="https://0.gravatar.com/avatar/fe8fb19a16d6f2304747ca337ad3a8f1?d=https%3A%2F%2Fidenticons.github.com%2F63a1f6a55025505e89b3820e99fbacc8.png&amp;r=x&amp;s=140" width="24" />
            <a href="/wachunga">wachunga</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alfredo Mesen" class=" js-avatar" data-user="12791" height="24" src="https://0.gravatar.com/avatar/664570a7fab31d289062c87adfc8daea?d=https%3A%2F%2Fidenticons.github.com%2F32523734b46f1f62ea0994ed1a521b16.png&amp;r=x&amp;s=140" width="24" />
            <a href="/albemuth">albemuth</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Albert Sun" class=" js-avatar" data-user="382862" height="24" src="https://2.gravatar.com/avatar/80aa84dfe6098634c389e7042a34eaa7?d=https%3A%2F%2Fidenticons.github.com%2Faff6b5a7cbf5e65d64e327ad4cd61110.png&amp;r=x&amp;s=140" width="24" />
            <a href="/albertsun">albertsun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Bowen" class=" js-avatar" data-user="475879" height="24" src="https://2.gravatar.com/avatar/f1a15d42781516879dab863cc5f46297?d=https%3A%2F%2Fidenticons.github.com%2Fab617ea8651cd0e36868a09c12a847ac.png&amp;r=x&amp;s=140" width="24" />
            <a href="/adamnbowen">adamnbowen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Max Albrecht" class=" js-avatar" data-user="134942" height="24" src="https://1.gravatar.com/avatar/9bcfab393e252df79fa12b0eae4701f4?d=https%3A%2F%2Fidenticons.github.com%2F47b5a953ac68315383732de7e1fbb9e4.png&amp;r=x&amp;s=140" width="24" />
            <a href="/eins78">eins78</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1381 lines (1231 sloc)</span>
          <span class="meta-divider"></span>
        <span>46.387 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/jashkenas/underscore?branch=master&amp;filepath=underscore.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/jashkenas/underscore/edit/master/underscore.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/jashkenas/underscore/raw/master/underscore.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jashkenas/underscore/blame/master/underscore.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/jashkenas/underscore/commits/master/underscore.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/jashkenas/underscore/delete/master/underscore.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">//     Underscore.js 1.6.0</span></div><div class='line' id='LC2'><span class="c1">//     http://underscorejs.org</span></div><div class='line' id='LC3'><span class="c1">//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters &amp; Editors</span></div><div class='line' id='LC4'><span class="c1">//     Underscore may be freely distributed under the MIT license.</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="c1">// Baseline setup</span></div><div class='line' id='LC9'>&nbsp;&nbsp;<span class="c1">// --------------</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="c1">// Establish the root object, `window` in the browser, or `exports` on the server.</span></div><div class='line' id='LC12'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">root</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="c1">// Save the previous value of the `_` variable.</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previousUnderscore</span> <span class="o">=</span> <span class="nx">root</span><span class="p">.</span><span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="c1">// Establish the object that gets returned to break out of a loop iteration.</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">breaker</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="c1">// Save bytes in the minified (but not gzipped) version:</span></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ArrayProto</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">ObjProto</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">FuncProto</span> <span class="o">=</span> <span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="c1">// Create quick reference variables for speed access to core prototypes.</span></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="kd">var</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span>             <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">push</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">slice</span>            <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">concat</span>           <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">concat</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">toString</span>         <span class="o">=</span> <span class="nx">ObjProto</span><span class="p">.</span><span class="nx">toString</span><span class="p">,</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasOwnProperty</span>   <span class="o">=</span> <span class="nx">ObjProto</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">;</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="c1">// All **ECMAScript 5** native function implementations that we hope to use</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="c1">// are declared here.</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="kd">var</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeForEach</span>      <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeMap</span>          <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeReduce</span>       <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">reduce</span><span class="p">,</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeReduceRight</span>  <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeFilter</span>       <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">filter</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeEvery</span>        <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">every</span><span class="p">,</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeSome</span>         <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">some</span><span class="p">,</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeIndexOf</span>      <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">,</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeLastIndexOf</span>  <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">,</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeIsArray</span>      <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">,</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeKeys</span>         <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">,</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nativeBind</span>         <span class="o">=</span> <span class="nx">FuncProto</span><span class="p">.</span><span class="nx">bind</span><span class="p">;</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="c1">// Create a safe reference to the Underscore object for use below.</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">))</span> <span class="k">return</span> <span class="k">new</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC52'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="c1">// Export the Underscore object for **Node.js**, with</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="c1">// backwards-compatibility for the old `require()` API. If we&#39;re in</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="c1">// the browser, add `_` as a global object via a string identifier,</span></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="c1">// for Closure Compiler &quot;advanced&quot; mode.</span></div><div class='line' id='LC58'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC63'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="c1">// Current version.</span></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">VERSION</span> <span class="o">=</span> <span class="s1">&#39;1.6.0&#39;</span><span class="p">;</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="c1">// Collection Functions</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="c1">// --------------------</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="c1">// The cornerstone, an `each` implementation, aka `forEach`.</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="c1">// Handles objects with the built-in `forEach`, arrays, and raw objects.</span></div><div class='line' id='LC75'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `forEach` if available.</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">each</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">each</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeForEach</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">===</span> <span class="nx">nativeForEach</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="nx">breaker</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]],</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">===</span> <span class="nx">breaker</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC91'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="c1">// Return the results of applying the iterator to each element.</span></div><div class='line' id='LC94'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `map` if available.</span></div><div class='line' id='LC95'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">map</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">collect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeMap</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span> <span class="o">===</span> <span class="nx">nativeMap</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">));</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reduceError</span> <span class="o">=</span> <span class="s1">&#39;Reduce of empty array with no initial value&#39;</span><span class="p">;</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="c1">// **Reduce** builds up a single result from a list of values, aka `inject`,</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="c1">// or `foldl`. Delegates to **ECMAScript 5**&#39;s native `reduce` if available.</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">foldl</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeReduce</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span> <span class="o">===</span> <span class="nx">nativeReduce</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">initial</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initial</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="nx">reduceError</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="c1">// The right-associative version of reduce, also known as `foldr`.</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `reduceRight` if available.</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reduceRight</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">foldr</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initial</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeReduceRight</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span> <span class="o">===</span> <span class="nx">nativeReduceRight</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">context</span><span class="p">)</span> <span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">initial</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">(</span><span class="nx">iterator</span><span class="p">,</span> <span class="nx">memo</span><span class="p">)</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">reduceRight</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">!==</span> <span class="o">+</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">keys</span> <span class="o">?</span> <span class="nx">keys</span><span class="p">[</span><span class="o">--</span><span class="nx">length</span><span class="p">]</span> <span class="o">:</span> <span class="o">--</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">index</span><span class="p">];</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initial</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">memo</span><span class="p">,</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">index</span><span class="p">],</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">initial</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="nx">reduceError</span><span class="p">);</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="c1">// Return the first value which passes a truth test. Aliased as `detect`.</span></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">find</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">detect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">any</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">predicate</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="c1">// Return all the elements that pass a truth test.</span></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `filter` if available.</span></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="c1">// Aliased as `select`.</span></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">filter</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">select</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeFilter</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">filter</span> <span class="o">===</span> <span class="nx">nativeFilter</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">predicate</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">))</span> <span class="nx">results</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;<span class="c1">// Return all the elements for which a truth test fails.</span></div><div class='line' id='LC181'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">reject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">negate</span><span class="p">(</span><span class="nx">predicate</span><span class="p">),</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC183'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>&nbsp;&nbsp;<span class="c1">// Determine whether all of the elements match a truth test.</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `every` if available.</span></div><div class='line' id='LC187'>&nbsp;&nbsp;<span class="c1">// Aliased as `all`.</span></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">every</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">all</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predicate</span> <span class="o">||</span> <span class="p">(</span><span class="nx">predicate</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeEvery</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">every</span> <span class="o">===</span> <span class="nx">nativeEvery</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span> <span class="o">&amp;&amp;</span> <span class="nx">predicate</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)))</span> <span class="k">return</span> <span class="nx">breaker</span><span class="p">;</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC197'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="c1">// Determine if at least one element in the object matches a truth test.</span></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `some` if available.</span></div><div class='line' id='LC201'>&nbsp;&nbsp;<span class="c1">// Aliased as `any`.</span></div><div class='line' id='LC202'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">any</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">some</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">any</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predicate</span> <span class="o">||</span> <span class="p">(</span><span class="nx">predicate</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeSome</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">some</span> <span class="o">===</span> <span class="nx">nativeSome</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">some</span><span class="p">(</span><span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span> <span class="o">||</span> <span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">predicate</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)))</span> <span class="k">return</span> <span class="nx">breaker</span><span class="p">;</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="c1">// Determine if the array or object contains a given value (using `===`).</span></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="c1">// Aliased as `include`.</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">contains</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">include</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">target</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="nx">nativeIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">target</span><span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">any</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span> <span class="o">===</span> <span class="nx">target</span><span class="p">;</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC221'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="c1">// Invoke a method (with arguments) on every item in a collection.</span></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">invoke</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isFunc</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">isFunc</span> <span class="o">?</span> <span class="nx">method</span> <span class="o">:</span> <span class="nx">value</span><span class="p">[</span><span class="nx">method</span><span class="p">]).</span><span class="nx">apply</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC230'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `map`: fetching a property.</span></div><div class='line' id='LC233'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">key</span><span class="p">));</span></div><div class='line' id='LC235'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `filter`: selecting only objects</span></div><div class='line' id='LC238'>&nbsp;&nbsp;<span class="c1">// containing specific `key:value` pairs.</span></div><div class='line' id='LC239'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">where</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">matches</span><span class="p">(</span><span class="nx">attrs</span><span class="p">));</span></div><div class='line' id='LC241'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="c1">// Convenience version of a common use case of `find`: getting the first object</span></div><div class='line' id='LC244'>&nbsp;&nbsp;<span class="c1">// containing specific `key:value` pairs.</span></div><div class='line' id='LC245'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">findWhere</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">matches</span><span class="p">(</span><span class="nx">attrs</span><span class="p">));</span></div><div class='line' id='LC247'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="c1">// Return the maximum element or (element-based computation).</span></div><div class='line' id='LC250'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">max</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">,</span> <span class="nx">lastComputed</span> <span class="o">=</span> <span class="o">-</span><span class="kc">Infinity</span><span class="p">,</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">,</span> <span class="nx">computed</span><span class="p">;</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&gt;</span> <span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">computed</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">computed</span> <span class="o">&gt;</span> <span class="nx">lastComputed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastComputed</span> <span class="o">=</span> <span class="nx">computed</span><span class="p">;</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC270'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="c1">// Return the minimum element (or element-based computation).</span></div><div class='line' id='LC273'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">min</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">,</span> <span class="nx">lastComputed</span> <span class="o">=</span> <span class="kc">Infinity</span><span class="p">,</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">,</span> <span class="nx">computed</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">iterator</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&lt;</span> <span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">computed</span> <span class="o">=</span> <span class="nx">iterator</span> <span class="o">?</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">computed</span> <span class="o">&lt;</span> <span class="nx">lastComputed</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastComputed</span> <span class="o">=</span> <span class="nx">computed</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="c1">// Shuffle an array, using the modern version of the</span></div><div class='line' id='LC296'>&nbsp;&nbsp;<span class="c1">// [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).</span></div><div class='line' id='LC297'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">shuffle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rand</span><span class="p">;</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">shuffled</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rand</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">random</span><span class="p">(</span><span class="nx">index</span><span class="o">++</span><span class="p">);</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="nx">index</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">shuffled</span><span class="p">[</span><span class="nx">rand</span><span class="p">];</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shuffled</span><span class="p">[</span><span class="nx">rand</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">shuffled</span><span class="p">;</span></div><div class='line' id='LC307'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>&nbsp;&nbsp;<span class="c1">// Sample **n** random values from a collection.</span></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="c1">// If **n** is not specified, returns a single random element.</span></div><div class='line' id='LC311'>&nbsp;&nbsp;<span class="c1">// The internal `guard` argument allows it to work with `map`.</span></div><div class='line' id='LC312'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sample</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">values</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">_</span><span class="p">.</span><span class="nx">random</span><span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)];</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">shuffle</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">n</span><span class="p">));</span></div><div class='line' id='LC318'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>&nbsp;&nbsp;<span class="c1">// An internal function to generate lookup iterators.</span></div><div class='line' id='LC321'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lookupIterator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">;</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC325'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>&nbsp;&nbsp;<span class="c1">// Sort the object&#39;s values by a criterion produced by an iterator.</span></div><div class='line' id='LC328'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sortBy</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="nx">value</span><span class="p">,</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span><span class="o">:</span> <span class="nx">index</span><span class="p">,</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">criteria</span><span class="o">:</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">list</span><span class="p">)</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">left</span><span class="p">,</span> <span class="nx">right</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">left</span><span class="p">.</span><span class="nx">criteria</span><span class="p">;</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">right</span><span class="p">.</span><span class="nx">criteria</span><span class="p">;</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">!==</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">&gt;</span> <span class="nx">b</span> <span class="o">||</span> <span class="nx">a</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">b</span> <span class="o">||</span> <span class="nx">b</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">left</span><span class="p">.</span><span class="nx">index</span> <span class="o">-</span> <span class="nx">right</span><span class="p">.</span><span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}),</span> <span class="s1">&#39;value&#39;</span><span class="p">);</span></div><div class='line' id='LC345'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>&nbsp;&nbsp;<span class="c1">// An internal function used for aggregate &quot;group by&quot; operations.</span></div><div class='line' id='LC348'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">group</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">behavior</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">behavior</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC358'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>&nbsp;&nbsp;<span class="c1">// Groups the object&#39;s values by a criterion. Pass either a string attribute</span></div><div class='line' id='LC361'>&nbsp;&nbsp;<span class="c1">// to group by, or a function that returns the criterion.</span></div><div class='line' id='LC362'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">groupBy</span> <span class="o">=</span> <span class="nx">group</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">?</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="nx">value</span><span class="p">];</span></div><div class='line' id='LC364'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'>&nbsp;&nbsp;<span class="c1">// Indexes the object&#39;s values by a criterion, similar to `groupBy`, but for</span></div><div class='line' id='LC367'>&nbsp;&nbsp;<span class="c1">// when you know that your index values will be unique.</span></div><div class='line' id='LC368'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">indexBy</span> <span class="o">=</span> <span class="nx">group</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC370'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>&nbsp;&nbsp;<span class="c1">// Counts instances of an object that group by a certain criterion. Pass</span></div><div class='line' id='LC373'>&nbsp;&nbsp;<span class="c1">// either a string attribute to count by, or a function that returns the</span></div><div class='line' id='LC374'>&nbsp;&nbsp;<span class="c1">// criterion.</span></div><div class='line' id='LC375'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">countBy</span> <span class="o">=</span> <span class="nx">group</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">result</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">?</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="o">++</span> <span class="o">:</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC377'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;<span class="c1">// Use a comparator function to figure out the smallest index at which</span></div><div class='line' id='LC380'>&nbsp;&nbsp;<span class="c1">// an object should be inserted so as to maintain order. Uses binary search.</span></div><div class='line' id='LC381'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">sortedIndex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">low</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">high</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">low</span> <span class="o">&lt;</span> <span class="nx">high</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">mid</span> <span class="o">=</span> <span class="p">(</span><span class="nx">low</span> <span class="o">+</span> <span class="nx">high</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">array</span><span class="p">[</span><span class="nx">mid</span><span class="p">])</span> <span class="o">&lt;</span> <span class="nx">value</span> <span class="o">?</span> <span class="nx">low</span> <span class="o">=</span> <span class="nx">mid</span> <span class="o">+</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">high</span> <span class="o">=</span> <span class="nx">mid</span><span class="p">;</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">low</span><span class="p">;</span></div><div class='line' id='LC390'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'>&nbsp;&nbsp;<span class="c1">// Safely create a real, live array from anything iterable.</span></div><div class='line' id='LC393'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">toArray</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">obj</span><span class="p">)</span> <span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">values</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC398'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>&nbsp;&nbsp;<span class="c1">// Return the number of elements in an object.</span></div><div class='line' id='LC401'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">size</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="o">+</span><span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC404'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>&nbsp;&nbsp;<span class="c1">// Array Functions</span></div><div class='line' id='LC407'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>&nbsp;&nbsp;<span class="c1">// Get the first element of an array. Passing **n** will return the first N</span></div><div class='line' id='LC410'>&nbsp;&nbsp;<span class="c1">// values in the array. Aliased as `head` and `take`. The **guard** check</span></div><div class='line' id='LC411'>&nbsp;&nbsp;<span class="c1">// allows it to work with `_.map`.</span></div><div class='line' id='LC412'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">first</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">head</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">take</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span><span class="p">)</span> <span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">n</span><span class="p">);</span></div><div class='line' id='LC417'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC418'><br/></div><div class='line' id='LC419'>&nbsp;&nbsp;<span class="c1">// Returns everything but the last entry of the array. Especially useful on</span></div><div class='line' id='LC420'>&nbsp;&nbsp;<span class="c1">// the arguments object. Passing **n** will return all the values in</span></div><div class='line' id='LC421'>&nbsp;&nbsp;<span class="c1">// the array, excluding the last N. The **guard** check allows it to work with</span></div><div class='line' id='LC422'>&nbsp;&nbsp;<span class="c1">// `_.map`.</span></div><div class='line' id='LC423'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">initial</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="p">((</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">n</span><span class="p">));</span></div><div class='line' id='LC425'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>&nbsp;&nbsp;<span class="c1">// Get the last element of an array. Passing **n** will return the last N</span></div><div class='line' id='LC428'>&nbsp;&nbsp;<span class="c1">// values in the array. The **guard** check allows it to work with `_.map`.</span></div><div class='line' id='LC429'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">last</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span><span class="p">)</span> <span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">array</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">n</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC433'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC434'><br/></div><div class='line' id='LC435'>&nbsp;&nbsp;<span class="c1">// Returns everything but the first entry of the array. Aliased as `tail` and `drop`.</span></div><div class='line' id='LC436'>&nbsp;&nbsp;<span class="c1">// Especially useful on the arguments object. Passing an **n** will return</span></div><div class='line' id='LC437'>&nbsp;&nbsp;<span class="c1">// the rest N values in the array. The **guard**</span></div><div class='line' id='LC438'>&nbsp;&nbsp;<span class="c1">// check allows it to work with `_.map`.</span></div><div class='line' id='LC439'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">rest</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">tail</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">drop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">guard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="p">(</span><span class="nx">n</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">||</span> <span class="nx">guard</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="nx">n</span><span class="p">);</span></div><div class='line' id='LC441'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'>&nbsp;&nbsp;<span class="c1">// Trim out all falsy values from an array.</span></div><div class='line' id='LC444'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">compact</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC446'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'>&nbsp;&nbsp;<span class="c1">// Internal implementation of a recursive `flatten` function.</span></div><div class='line' id='LC449'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flatten</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">,</span> <span class="nx">strict</span><span class="p">,</span> <span class="nx">output</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">shallow</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">input</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">input</span><span class="p">);</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">input</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">strict</span><span class="p">)</span> <span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">shallow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flatten</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">,</span> <span class="nx">strict</span><span class="p">,</span> <span class="nx">output</span><span class="p">);</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC464'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>&nbsp;&nbsp;<span class="c1">// Flatten out an array, either recursively (by default), or just one level.</span></div><div class='line' id='LC467'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">flatten</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">flatten</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">shallow</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC469'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>&nbsp;&nbsp;<span class="c1">// Return a version of the array that does not contain the specified value(s).</span></div><div class='line' id='LC472'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">without</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">difference</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC474'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC475'><br/></div><div class='line' id='LC476'>&nbsp;&nbsp;<span class="c1">// Split an array into two arrays: one whose elements all satisfy the given</span></div><div class='line' id='LC477'>&nbsp;&nbsp;<span class="c1">// predicate, and one whose elements all do not satisfy the predicate.</span></div><div class='line' id='LC478'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">partition</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">predicate</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">predicate</span> <span class="o">=</span> <span class="nx">lookupIterator</span><span class="p">(</span><span class="nx">predicate</span><span class="p">);</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pass</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">fail</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">elem</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">predicate</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">elem</span><span class="p">)</span> <span class="o">?</span> <span class="nx">pass</span> <span class="o">:</span> <span class="nx">fail</span><span class="p">).</span><span class="nx">push</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">[</span><span class="nx">pass</span><span class="p">,</span> <span class="nx">fail</span><span class="p">];</span></div><div class='line' id='LC485'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC486'><br/></div><div class='line' id='LC487'>&nbsp;&nbsp;<span class="c1">// Produce a duplicate-free version of the array. If the array has already</span></div><div class='line' id='LC488'>&nbsp;&nbsp;<span class="c1">// been sorted, you have the option of using a faster algorithm.</span></div><div class='line' id='LC489'>&nbsp;&nbsp;<span class="c1">// Aliased as `unique`.</span></div><div class='line' id='LC490'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">unique</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">isSorted</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">;</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">isSorted</span><span class="p">;</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isSorted</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">seen</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">)</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">array</span><span class="p">);</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSorted</span> <span class="o">?</span> <span class="p">(</span><span class="o">!</span><span class="nx">i</span> <span class="o">||</span> <span class="nx">seen</span> <span class="o">!==</span> <span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">seen</span><span class="p">,</span> <span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSorted</span><span class="p">)</span> <span class="nx">seen</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="nx">seen</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC509'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>&nbsp;&nbsp;<span class="c1">// Produce an array that contains the union: each distinct element from all of</span></div><div class='line' id='LC512'>&nbsp;&nbsp;<span class="c1">// the passed-in arrays.</span></div><div class='line' id='LC513'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">union</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span><span class="p">(</span><span class="nx">flatten</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="p">[]));</span></div><div class='line' id='LC515'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC516'><br/></div><div class='line' id='LC517'>&nbsp;&nbsp;<span class="c1">// Produce an array that contains every item shared between all the</span></div><div class='line' id='LC518'>&nbsp;&nbsp;<span class="c1">// passed-in arrays.</span></div><div class='line' id='LC519'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">intersection</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rest</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">uniq</span><span class="p">(</span><span class="nx">array</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="nx">rest</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">other</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">other</span><span class="p">,</span> <span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC526'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC527'><br/></div><div class='line' id='LC528'>&nbsp;&nbsp;<span class="c1">// Take the difference between one array and a number of other arrays.</span></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="c1">// Only the elements present in just the first array will remain.</span></div><div class='line' id='LC530'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">difference</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rest</span> <span class="o">=</span> <span class="nx">flatten</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kc">true</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span> <span class="k">return</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">rest</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC533'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC534'><br/></div><div class='line' id='LC535'>&nbsp;&nbsp;<span class="c1">// Zip together multiple lists into a single array -- elements that share</span></div><div class='line' id='LC536'>&nbsp;&nbsp;<span class="c1">// an index go together.</span></div><div class='line' id='LC537'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">zip</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="s1">&#39;length&#39;</span><span class="p">).</span><span class="nx">concat</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">results</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">results</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pluck</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">results</span><span class="p">;</span></div><div class='line' id='LC544'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC545'><br/></div><div class='line' id='LC546'>&nbsp;&nbsp;<span class="c1">// Converts lists into objects. Pass either a single array of `[key, value]`</span></div><div class='line' id='LC547'>&nbsp;&nbsp;<span class="c1">// pairs, or two parallel arrays of the same length -- one of keys, and one of</span></div><div class='line' id='LC548'>&nbsp;&nbsp;<span class="c1">// the corresponding values.</span></div><div class='line' id='LC549'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">object</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">list</span><span class="p">,</span> <span class="nx">values</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">list</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="p">{};</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">values</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC556'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">0</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">list</span><span class="p">[</span><span class="nx">i</span><span class="p">][</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC560'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'>&nbsp;&nbsp;<span class="c1">// If the browser doesn&#39;t supply us with indexOf (I&#39;m looking at you, **MSIE**),</span></div><div class='line' id='LC563'>&nbsp;&nbsp;<span class="c1">// we need this function. Return the position of the first occurrence of an</span></div><div class='line' id='LC564'>&nbsp;&nbsp;<span class="c1">// item in an array, or -1 if the item is not included in the array.</span></div><div class='line' id='LC565'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `indexOf` if available.</span></div><div class='line' id='LC566'>&nbsp;&nbsp;<span class="c1">// If the array is large and already in sort order, pass `true`</span></div><div class='line' id='LC567'>&nbsp;&nbsp;<span class="c1">// for **isSorted** to use binary search.</span></div><div class='line' id='LC568'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isSorted</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">isSorted</span> <span class="o">==</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="p">(</span><span class="nx">isSorted</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">+</span> <span class="nx">isSorted</span><span class="p">)</span> <span class="o">:</span> <span class="nx">isSorted</span><span class="p">);</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">i</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">sortedIndex</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span> <span class="o">?</span> <span class="nx">i</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="nx">nativeIndexOf</span><span class="p">)</span> <span class="k">return</span> <span class="nx">array</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="nx">isSorted</span><span class="p">);</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC582'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC583'><br/></div><div class='line' id='LC584'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `lastIndexOf` if available.</span></div><div class='line' id='LC585'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">lastIndexOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">array</span><span class="p">,</span> <span class="nx">item</span><span class="p">,</span> <span class="nx">from</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hasIndex</span> <span class="o">=</span> <span class="nx">from</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeLastIndexOf</span> <span class="o">&amp;&amp;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span> <span class="o">===</span> <span class="nx">nativeLastIndexOf</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasIndex</span> <span class="o">?</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">,</span> <span class="nx">from</span><span class="p">)</span> <span class="o">:</span> <span class="nx">array</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="p">(</span><span class="nx">hasIndex</span> <span class="o">?</span> <span class="nx">from</span> <span class="o">:</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">item</span><span class="p">)</span> <span class="k">return</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC594'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC595'><br/></div><div class='line' id='LC596'>&nbsp;&nbsp;<span class="c1">// Generate an integer Array containing an arithmetic progression. A port of</span></div><div class='line' id='LC597'>&nbsp;&nbsp;<span class="c1">// the native Python `range()` function. See</span></div><div class='line' id='LC598'>&nbsp;&nbsp;<span class="c1">// [the Python documentation](http://docs.python.org/library/functions.html#range).</span></div><div class='line' id='LC599'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">range</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">stop</span><span class="p">,</span> <span class="nx">step</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stop</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">step</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">||</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">((</span><span class="nx">stop</span> <span class="o">-</span> <span class="nx">start</span><span class="p">)</span> <span class="o">/</span> <span class="nx">step</span><span class="p">),</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">idx</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">range</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">idx</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">range</span><span class="p">[</span><span class="nx">idx</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">start</span> <span class="o">+=</span> <span class="nx">step</span><span class="p">;</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC614'><br/></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">range</span><span class="p">;</span></div><div class='line' id='LC616'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC617'><br/></div><div class='line' id='LC618'>&nbsp;&nbsp;<span class="c1">// Function (ahem) Functions</span></div><div class='line' id='LC619'>&nbsp;&nbsp;<span class="c1">// ------------------</span></div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>&nbsp;&nbsp;<span class="c1">// Reusable constructor function for prototype setting.</span></div><div class='line' id='LC622'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ctor</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>&nbsp;&nbsp;<span class="c1">// Create a function bound to a given object (assigning `this`, and arguments,</span></div><div class='line' id='LC625'>&nbsp;&nbsp;<span class="c1">// optionally). Delegates to **ECMAScript 5**&#39;s native `Function.bind` if</span></div><div class='line' id='LC626'>&nbsp;&nbsp;<span class="c1">// available.</span></div><div class='line' id='LC627'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">bound</span><span class="p">;</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeBind</span> <span class="o">&amp;&amp;</span> <span class="nx">func</span><span class="p">.</span><span class="nx">bind</span> <span class="o">===</span> <span class="nx">nativeBind</span><span class="p">)</span> <span class="k">return</span> <span class="nx">nativeBind</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">func</span><span class="p">))</span> <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">;</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">bound</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nx">bound</span><span class="p">))</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ctor</span><span class="p">;</span></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">self</span><span class="p">,</span> <span class="nx">args</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">)));</span></div><div class='line' id='LC638'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="o">===</span> <span class="nx">result</span><span class="p">)</span> <span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC641'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'>&nbsp;&nbsp;<span class="c1">// Partially apply a function by creating a version that has had some of its</span></div><div class='line' id='LC644'>&nbsp;&nbsp;<span class="c1">// arguments pre-filled, without changing its dynamic `this` context. _ acts</span></div><div class='line' id='LC645'>&nbsp;&nbsp;<span class="c1">// as a placeholder, allowing any combination of arguments to be pre-filled.</span></div><div class='line' id='LC646'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">partial</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">boundArgs</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">position</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">boundArgs</span><span class="p">.</span><span class="nx">slice</span><span class="p">();</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">args</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">args</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">_</span><span class="p">)</span> <span class="nx">args</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">position</span><span class="o">++</span><span class="p">];</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">position</span> <span class="o">&lt;</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="nx">position</span><span class="o">++</span><span class="p">]);</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC656'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC657'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC658'><br/></div><div class='line' id='LC659'>&nbsp;&nbsp;<span class="c1">// Bind a number of an object&#39;s methods to that object. Remaining arguments</span></div><div class='line' id='LC660'>&nbsp;&nbsp;<span class="c1">// are the method names to be bound. Useful for ensuring that all callbacks</span></div><div class='line' id='LC661'>&nbsp;&nbsp;<span class="c1">// defined on an object belong to it.</span></div><div class='line' id='LC662'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">bindAll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">funcs</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;bindAll must be passed function names&#39;</span><span class="p">);</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">funcs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">)</span> <span class="p">{</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">f</span><span class="p">],</span> <span class="nx">obj</span><span class="p">);</span> <span class="p">});</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC667'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>&nbsp;&nbsp;<span class="c1">// Memoize an expensive function by storing its results.</span></div><div class='line' id='LC670'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">memoize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">hasher</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">memo</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hasher</span> <span class="o">||</span> <span class="p">(</span><span class="nx">hasher</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">identity</span><span class="p">);</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">hasher</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">memo</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">?</span> <span class="nx">memo</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="p">(</span><span class="nx">memo</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC677'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC678'><br/></div><div class='line' id='LC679'>&nbsp;&nbsp;<span class="c1">// Delays a function for the given number of milliseconds, and then calls</span></div><div class='line' id='LC680'>&nbsp;&nbsp;<span class="c1">// it with the arguments supplied.</span></div><div class='line' id='LC681'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">delay</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span> <span class="p">},</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC684'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'>&nbsp;&nbsp;<span class="c1">// Defers a function, scheduling it to run after the current call stack has</span></div><div class='line' id='LC687'>&nbsp;&nbsp;<span class="c1">// cleared.</span></div><div class='line' id='LC688'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">delay</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="p">[</span><span class="nx">func</span><span class="p">,</span> <span class="mi">1</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">)));</span></div><div class='line' id='LC690'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC691'><br/></div><div class='line' id='LC692'>&nbsp;&nbsp;<span class="c1">// Returns a function, that, when invoked, will only be triggered at most once</span></div><div class='line' id='LC693'>&nbsp;&nbsp;<span class="c1">// during a given window of time. Normally, the throttled function will run</span></div><div class='line' id='LC694'>&nbsp;&nbsp;<span class="c1">// as much as it can, without ever going more than once per `wait` duration;</span></div><div class='line' id='LC695'>&nbsp;&nbsp;<span class="c1">// but if you&#39;d like to disable the execution on the leading edge, pass</span></div><div class='line' id='LC696'>&nbsp;&nbsp;<span class="c1">// `{leading: false}`. To disable execution on the trailing edge, ditto.</span></div><div class='line' id='LC697'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">throttle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">previous</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">||</span> <span class="p">(</span><span class="nx">options</span> <span class="o">=</span> <span class="p">{});</span></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previous</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">leading</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">args</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">now</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span></div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">previous</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">leading</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="nx">previous</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">remaining</span> <span class="o">=</span> <span class="nx">wait</span> <span class="o">-</span> <span class="p">(</span><span class="nx">now</span> <span class="o">-</span> <span class="nx">previous</span><span class="p">);</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">remaining</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">remaining</span> <span class="o">&gt;</span> <span class="nx">wait</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">previous</span> <span class="o">=</span> <span class="nx">now</span><span class="p">;</span></div><div class='line' id='LC718'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">args</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeout</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">trailing</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">remaining</span><span class="p">);</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC725'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC726'><br/></div><div class='line' id='LC727'>&nbsp;&nbsp;<span class="c1">// Returns a function, that, as long as it continues to be invoked, will not</span></div><div class='line' id='LC728'>&nbsp;&nbsp;<span class="c1">// be triggered. The function will be called after it stops being called for</span></div><div class='line' id='LC729'>&nbsp;&nbsp;<span class="c1">// N milliseconds. If `immediate` is passed, trigger the function on the</span></div><div class='line' id='LC730'>&nbsp;&nbsp;<span class="c1">// leading edge, instead of the trailing.</span></div><div class='line' id='LC731'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">debounce</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wait</span><span class="p">,</span> <span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">args</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">timestamp</span><span class="p">,</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC733'><br/></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">later</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">last</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">now</span><span class="p">()</span> <span class="o">-</span> <span class="nx">timestamp</span><span class="p">;</span></div><div class='line' id='LC736'><br/></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">last</span> <span class="o">&lt;</span> <span class="nx">wait</span> <span class="o">&amp;&amp;</span> <span class="nx">last</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span> <span class="o">-</span> <span class="nx">last</span><span class="p">);</span></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">immediate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">args</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC747'><br/></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC750'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC751'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timestamp</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">now</span><span class="p">();</span></div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">callNow</span> <span class="o">=</span> <span class="nx">immediate</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">timeout</span><span class="p">;</span></div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">timeout</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">later</span><span class="p">,</span> <span class="nx">wait</span><span class="p">);</span></div><div class='line' id='LC755'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">callNow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC757'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC758'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span> <span class="o">=</span> <span class="nx">args</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC759'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC760'><br/></div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC763'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>&nbsp;&nbsp;<span class="c1">// Returns a function that will be executed at most one time, no matter how</span></div><div class='line' id='LC766'>&nbsp;&nbsp;<span class="c1">// often you call it. Useful for lazy initialization.</span></div><div class='line' id='LC767'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">once</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ran</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ran</span><span class="p">)</span> <span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ran</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">memo</span> <span class="o">=</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">func</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">memo</span><span class="p">;</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC776'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC777'><br/></div><div class='line' id='LC778'>&nbsp;&nbsp;<span class="c1">// Returns the first function passed as an argument to the second,</span></div><div class='line' id='LC779'>&nbsp;&nbsp;<span class="c1">// allowing you to adjust arguments, run code before and after, and</span></div><div class='line' id='LC780'>&nbsp;&nbsp;<span class="c1">// conditionally execute the original function.</span></div><div class='line' id='LC781'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">wrap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">func</span><span class="p">,</span> <span class="nx">wrapper</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">partial</span><span class="p">(</span><span class="nx">wrapper</span><span class="p">,</span> <span class="nx">func</span><span class="p">);</span></div><div class='line' id='LC783'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC784'><br/></div><div class='line' id='LC785'>&nbsp;&nbsp;<span class="c1">// Returns a negated version of the passed-in predicate.</span></div><div class='line' id='LC786'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">negate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">predicate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC787'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!</span><span class="nx">predicate</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC790'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC791'><br/></div><div class='line' id='LC792'>&nbsp;&nbsp;<span class="c1">// Returns a function that is the composition of a list of functions, each</span></div><div class='line' id='LC793'>&nbsp;&nbsp;<span class="c1">// consuming the return value of the function that follows.</span></div><div class='line' id='LC794'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">compose</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">funcs</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">funcs</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">funcs</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">)];</span></div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC803'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC804'><br/></div><div class='line' id='LC805'>&nbsp;&nbsp;<span class="c1">// Returns a function that will only be executed after being called N times.</span></div><div class='line' id='LC806'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">after</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">times</span><span class="p">,</span> <span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC807'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">--</span><span class="nx">times</span> <span class="o">&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC812'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC813'><br/></div><div class='line' id='LC814'>&nbsp;&nbsp;<span class="c1">// Object Functions</span></div><div class='line' id='LC815'>&nbsp;&nbsp;<span class="c1">// ----------------</span></div><div class='line' id='LC816'><br/></div><div class='line' id='LC817'>&nbsp;&nbsp;<span class="c1">// Retrieve the names of an object&#39;s properties.</span></div><div class='line' id='LC818'>&nbsp;&nbsp;<span class="c1">// Delegates to **ECMAScript 5**&#39;s native `Object.keys`</span></div><div class='line' id='LC819'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">keys</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="p">[];</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">nativeKeys</span><span class="p">)</span> <span class="k">return</span> <span class="nx">nativeKeys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC824'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">keys</span><span class="p">;</span></div><div class='line' id='LC825'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC826'><br/></div><div class='line' id='LC827'>&nbsp;&nbsp;<span class="c1">// Retrieve the values of an object&#39;s properties.</span></div><div class='line' id='LC828'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">values</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">values</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">values</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]];</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">values</span><span class="p">;</span></div><div class='line' id='LC836'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC837'><br/></div><div class='line' id='LC838'>&nbsp;&nbsp;<span class="c1">// Convert an object into a list of `[key, value]` pairs.</span></div><div class='line' id='LC839'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pairs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pairs</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pairs</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]]];</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">pairs</span><span class="p">;</span></div><div class='line' id='LC847'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC848'><br/></div><div class='line' id='LC849'>&nbsp;&nbsp;<span class="c1">// Invert the keys and values of an object. The values must be serializable.</span></div><div class='line' id='LC850'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">invert</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">obj</span><span class="p">[</span><span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]]]</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC857'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC858'><br/></div><div class='line' id='LC859'>&nbsp;&nbsp;<span class="c1">// Return a sorted list of the function names available on the object.</span></div><div class='line' id='LC860'>&nbsp;&nbsp;<span class="c1">// Aliased as `methods`</span></div><div class='line' id='LC861'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">functions</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">methods</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">names</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]))</span> <span class="nx">names</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC865'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">names</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span></div><div class='line' id='LC867'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC868'><br/></div><div class='line' id='LC869'>&nbsp;&nbsp;<span class="c1">// Extend a given object with all the properties in passed-in object(s).</span></div><div class='line' id='LC870'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC878'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC879'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC880'><br/></div><div class='line' id='LC881'>&nbsp;&nbsp;<span class="c1">// Return a copy of the object only containing the whitelisted properties.</span></div><div class='line' id='LC882'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">pick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">iterator</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">obj</span><span class="p">))</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC888'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">([],</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="nx">result</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC896'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC897'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC898'><br/></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;<span class="c1">// Return a copy of the object without the blacklisted properties.</span></div><div class='line' id='LC900'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">omit</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span><span class="p">;</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">iterator</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC903'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">negate</span><span class="p">(</span><span class="nx">iterator</span><span class="p">);</span></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keys</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">concat</span><span class="p">.</span><span class="nx">apply</span><span class="p">([],</span> <span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">)),</span> <span class="nb">String</span><span class="p">);</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iterator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">keys</span><span class="p">,</span> <span class="nx">key</span><span class="p">);</span> <span class="p">};</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">pick</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC909'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC910'><br/></div><div class='line' id='LC911'>&nbsp;&nbsp;<span class="c1">// Fill in a given object with default properties.</span></div><div class='line' id='LC912'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">source</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">=</span> <span class="nx">source</span><span class="p">[</span><span class="nx">prop</span><span class="p">];</span></div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC921'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC922'><br/></div><div class='line' id='LC923'>&nbsp;&nbsp;<span class="c1">// Create a (shallow-cloned) duplicate of an object.</span></div><div class='line' id='LC924'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">clone</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">slice</span><span class="p">()</span> <span class="o">:</span> <span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC927'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC928'><br/></div><div class='line' id='LC929'>&nbsp;&nbsp;<span class="c1">// Invokes interceptor with the obj, and then returns obj.</span></div><div class='line' id='LC930'>&nbsp;&nbsp;<span class="c1">// The primary purpose of this method is to &quot;tap into&quot; a method chain, in</span></div><div class='line' id='LC931'>&nbsp;&nbsp;<span class="c1">// order to perform operations on intermediate results within the chain.</span></div><div class='line' id='LC932'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">tap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">interceptor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interceptor</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC935'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>&nbsp;&nbsp;<span class="c1">// Internal recursive comparison function for `isEqual`.</span></div><div class='line' id='LC938'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">eq</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">aStack</span><span class="p">,</span> <span class="nx">bStack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC939'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Identical objects are equal. `0 === -0`, but they aren&#39;t identical.</span></div><div class='line' id='LC940'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).</span></div><div class='line' id='LC941'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span><span class="p">)</span> <span class="k">return</span> <span class="nx">a</span> <span class="o">!==</span> <span class="mi">0</span> <span class="o">||</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">a</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// A strict comparison is necessary because `null == undefined`.</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">==</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">b</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="nx">a</span> <span class="o">===</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Unwrap any wrapped objects.</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">)</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">b</span> <span class="k">instanceof</span> <span class="nx">_</span><span class="p">)</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compare `[[Class]]` names.</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">className</span> <span class="o">=</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC949'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">className</span> <span class="o">!=</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC950'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC951'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Strings, numbers, dates, and booleans are compared by value.</span></div><div class='line' id='LC952'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object String]&#39;</span><span class="o">:</span></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Primitives and their corresponding object wrappers are equivalent; thus, `&quot;5&quot;` is</span></div><div class='line' id='LC954'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// equivalent to `new String(&quot;5&quot;)`.</span></div><div class='line' id='LC955'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">==</span> <span class="nb">String</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC956'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Number]&#39;</span><span class="o">:</span></div><div class='line' id='LC957'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for</span></div><div class='line' id='LC958'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// other numeric values.</span></div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span> <span class="o">!=</span> <span class="o">+</span><span class="nx">a</span> <span class="o">?</span> <span class="nx">b</span> <span class="o">!=</span> <span class="o">+</span><span class="nx">b</span> <span class="o">:</span> <span class="p">(</span><span class="nx">a</span> <span class="o">==</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">a</span> <span class="o">==</span> <span class="mi">1</span> <span class="o">/</span> <span class="nx">b</span> <span class="o">:</span> <span class="nx">a</span> <span class="o">==</span> <span class="o">+</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC960'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Date]&#39;</span><span class="o">:</span></div><div class='line' id='LC961'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object Boolean]&#39;</span><span class="o">:</span></div><div class='line' id='LC962'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Coerce dates and booleans to numeric primitive values. Dates are compared by their</span></div><div class='line' id='LC963'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// millisecond representations. Note that invalid dates with millisecond representations</span></div><div class='line' id='LC964'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// of `NaN` are not equivalent.</span></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">+</span><span class="nx">a</span> <span class="o">==</span> <span class="o">+</span><span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// RegExps are compared by their source patterns and flags.</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;[object RegExp]&#39;</span><span class="o">:</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">source</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">source</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">global</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">global</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC970'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">multiline</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">multiline</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC971'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span><span class="p">.</span><span class="nx">ignoreCase</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">ignoreCase</span><span class="p">;</span></div><div class='line' id='LC972'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">a</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="k">typeof</span> <span class="nx">b</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC974'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Assume equality for cyclic structures. The algorithm for detecting cyclic</span></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.</span></div><div class='line' id='LC976'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">aStack</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC977'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">length</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC978'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Linear search. Performance is inversely proportional to the number of</span></div><div class='line' id='LC979'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// unique nested structures.</span></div><div class='line' id='LC980'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">aStack</span><span class="p">[</span><span class="nx">length</span><span class="p">]</span> <span class="o">==</span> <span class="nx">a</span><span class="p">)</span> <span class="k">return</span> <span class="nx">bStack</span><span class="p">[</span><span class="nx">length</span><span class="p">]</span> <span class="o">==</span> <span class="nx">b</span><span class="p">;</span></div><div class='line' id='LC981'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC982'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Objects with different constructors are not equivalent, but `Object`s</span></div><div class='line' id='LC983'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// from different frames are.</span></div><div class='line' id='LC984'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">aCtor</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">constructor</span><span class="p">,</span> <span class="nx">bCtor</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC985'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">aCtor</span> <span class="o">!==</span> <span class="nx">bCtor</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">aCtor</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">aCtor</span> <span class="k">instanceof</span> <span class="nx">aCtor</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC986'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">bCtor</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">bCtor</span> <span class="k">instanceof</span> <span class="nx">bCtor</span><span class="p">))</span></div><div class='line' id='LC987'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">&amp;&amp;</span> <span class="p">(</span><span class="s1">&#39;constructor&#39;</span> <span class="k">in</span> <span class="nx">a</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;constructor&#39;</span> <span class="k">in</span> <span class="nx">b</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC988'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC989'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC990'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add the first object to the stack of traversed objects.</span></div><div class='line' id='LC991'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">aStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC992'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bStack</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC993'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">result</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC994'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Recursively compare objects and arrays.</span></div><div class='line' id='LC995'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">className</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC996'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compare array lengths to determine if a deep comparison is necessary.</span></div><div class='line' id='LC997'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC998'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="nx">size</span> <span class="o">==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC999'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1000'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare the contents, ignoring non-numeric properties.</span></div><div class='line' id='LC1001'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">size</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1002'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">size</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">size</span><span class="p">],</span> <span class="nx">aStack</span><span class="p">,</span> <span class="nx">bStack</span><span class="p">)))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1004'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1005'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1006'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare objects.</span></div><div class='line' id='LC1007'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1008'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1009'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Count the expected number of properties.</span></div><div class='line' id='LC1010'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">size</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC1011'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Deep compare each member.</span></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">aStack</span><span class="p">,</span> <span class="nx">bStack</span><span class="p">)))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1014'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1015'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Ensure that both objects contain the same number of properties.</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1017'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1018'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">size</span><span class="o">--</span><span class="p">))</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1019'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1020'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span> <span class="o">=</span> <span class="o">!</span><span class="nx">size</span><span class="p">;</span></div><div class='line' id='LC1021'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1023'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remove the first object from the stack of traversed objects.</span></div><div class='line' id='LC1024'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">aStack</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC1025'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bStack</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC1026'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC1027'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1028'><br/></div><div class='line' id='LC1029'>&nbsp;&nbsp;<span class="c1">// Perform a deep comparison to check if two objects are equal.</span></div><div class='line' id='LC1030'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isEqual</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1031'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">eq</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="p">[],</span> <span class="p">[]);</span></div><div class='line' id='LC1032'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1033'><br/></div><div class='line' id='LC1034'>&nbsp;&nbsp;<span class="c1">// Is a given array, string, or object empty?</span></div><div class='line' id='LC1035'>&nbsp;&nbsp;<span class="c1">// An &quot;empty&quot; object has no enumerable own-properties.</span></div><div class='line' id='LC1036'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isEmpty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">obj</span><span class="p">))</span> <span class="k">return</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1039'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">obj</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1042'><br/></div><div class='line' id='LC1043'>&nbsp;&nbsp;<span class="c1">// Is a given value a DOM element?</span></div><div class='line' id='LC1044'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1045'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1046'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1047'><br/></div><div class='line' id='LC1048'>&nbsp;&nbsp;<span class="c1">// Is a given value an array?</span></div><div class='line' id='LC1049'>&nbsp;&nbsp;<span class="c1">// Delegates to ECMA5&#39;s native Array.isArray</span></div><div class='line' id='LC1050'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">=</span> <span class="nx">nativeIsArray</span> <span class="o">||</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1051'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">;</span></div><div class='line' id='LC1052'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1053'><br/></div><div class='line' id='LC1054'>&nbsp;&nbsp;<span class="c1">// Is a given variable an object?</span></div><div class='line' id='LC1055'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isObject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1056'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC1057'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1058'><br/></div><div class='line' id='LC1059'>&nbsp;&nbsp;<span class="c1">// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.</span></div><div class='line' id='LC1060'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;Arguments&#39;</span><span class="p">,</span> <span class="s1">&#39;Function&#39;</span><span class="p">,</span> <span class="s1">&#39;String&#39;</span><span class="p">,</span> <span class="s1">&#39;Number&#39;</span><span class="p">,</span> <span class="s1">&#39;Date&#39;</span><span class="p">,</span> <span class="s1">&#39;RegExp&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1061'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">[</span><span class="s1">&#39;is&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1062'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></div><div class='line' id='LC1063'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1064'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1065'><br/></div><div class='line' id='LC1066'>&nbsp;&nbsp;<span class="c1">// Define a fallback version of the method in browsers (ahem, IE), where</span></div><div class='line' id='LC1067'>&nbsp;&nbsp;<span class="c1">// there isn&#39;t any inspectable &quot;Arguments&quot; type.</span></div><div class='line' id='LC1068'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span><span class="p">(</span><span class="nx">arguments</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isArguments</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1070'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="p">(</span><span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="nx">_</span><span class="p">.</span><span class="nx">has</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;callee&#39;</span><span class="p">));</span></div><div class='line' id='LC1071'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1072'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1073'><br/></div><div class='line' id='LC1074'>&nbsp;&nbsp;<span class="c1">// Optimize `isFunction` if appropriate.</span></div><div class='line' id='LC1075'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="p">(</span><span class="sr">/./</span><span class="p">)</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1076'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1077'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">;</span></div><div class='line' id='LC1078'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1079'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1080'><br/></div><div class='line' id='LC1081'>&nbsp;&nbsp;<span class="c1">// Is a given object a finite number?</span></div><div class='line' id='LC1082'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nb">isFinite</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1083'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">obj</span><span class="p">));</span></div><div class='line' id='LC1084'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1085'><br/></div><div class='line' id='LC1086'>&nbsp;&nbsp;<span class="c1">// Is the given value `NaN`? (NaN is the only number which does not equal itself).</span></div><div class='line' id='LC1087'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nb">isNaN</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span> <span class="o">!=</span> <span class="o">+</span><span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC1089'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'>&nbsp;&nbsp;<span class="c1">// Is a given value a boolean?</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isBoolean</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1093'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">true</span> <span class="o">||</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">false</span> <span class="o">||</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Boolean]&#39;</span><span class="p">;</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1095'><br/></div><div class='line' id='LC1096'>&nbsp;&nbsp;<span class="c1">// Is a given value equal to null?</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isNull</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1099'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1100'><br/></div><div class='line' id='LC1101'>&nbsp;&nbsp;<span class="c1">// Is a given variable undefined?</span></div><div class='line' id='LC1102'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">isUndefined</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1104'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1105'><br/></div><div class='line' id='LC1106'>&nbsp;&nbsp;<span class="c1">// Shortcut function for checking if an object has a given property directly</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;<span class="c1">// on itself (in other words, not on a prototype).</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">has</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC1110'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1111'><br/></div><div class='line' id='LC1112'>&nbsp;&nbsp;<span class="c1">// Utility Functions</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;<span class="c1">// -----------------</span></div><div class='line' id='LC1114'><br/></div><div class='line' id='LC1115'>&nbsp;&nbsp;<span class="c1">// Run Underscore.js in *noConflict* mode, returning the `_` variable to its</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;<span class="c1">// previous owner. Returns a reference to the Underscore object.</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">noConflict</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">root</span><span class="p">.</span><span class="nx">_</span> <span class="o">=</span> <span class="nx">previousUnderscore</span><span class="p">;</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1120'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1121'><br/></div><div class='line' id='LC1122'>&nbsp;&nbsp;<span class="c1">// Keep the identity function around for default iterators.</span></div><div class='line' id='LC1123'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">identity</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1125'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1126'><br/></div><div class='line' id='LC1127'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">constant</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1131'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1132'><br/></div><div class='line' id='LC1133'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">noop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){};</span></div><div class='line' id='LC1134'><br/></div><div class='line' id='LC1135'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">property</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1140'><br/></div><div class='line' id='LC1141'>&nbsp;&nbsp;<span class="c1">// Returns a predicate for checking whether an object has a given set of `key:value` pairs.</span></div><div class='line' id='LC1142'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">matches</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">===</span> <span class="nx">attrs</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">attrs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">attrs</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span></div><div class='line' id='LC1147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1151'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1152'><br/></div><div class='line' id='LC1153'>&nbsp;&nbsp;<span class="c1">// Run a function **n** times.</span></div><div class='line' id='LC1154'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">times</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">iterator</span><span class="p">,</span> <span class="nx">context</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">accum</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">n</span><span class="p">));</span></div><div class='line' id='LC1156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">n</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">accum</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">iterator</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">context</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC1157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">accum</span><span class="p">;</span></div><div class='line' id='LC1158'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1159'><br/></div><div class='line' id='LC1160'>&nbsp;&nbsp;<span class="c1">// Return a random integer between min and max (inclusive).</span></div><div class='line' id='LC1161'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">random</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">min</span><span class="p">,</span> <span class="nx">max</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">max</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">max</span> <span class="o">=</span> <span class="nx">min</span><span class="p">;</span></div><div class='line' id='LC1164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">min</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">min</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">max</span> <span class="o">-</span> <span class="nx">min</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1168'><br/></div><div class='line' id='LC1169'>&nbsp;&nbsp;<span class="c1">// A (possibly faster) way to get the current timestamp as an integer.</span></div><div class='line' id='LC1170'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">now</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">now</span> <span class="o">||</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">().</span><span class="nx">getTime</span><span class="p">();</span> <span class="p">};</span></div><div class='line' id='LC1171'><br/></div><div class='line' id='LC1172'>&nbsp;&nbsp;<span class="c1">// List of HTML entities for escaping.</span></div><div class='line' id='LC1173'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">entityMap</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1174'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC1175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&amp;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;amp;&#39;</span><span class="p">,</span></div><div class='line' id='LC1176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&lt;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;lt;&#39;</span><span class="p">,</span></div><div class='line' id='LC1177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&gt;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span><span class="o">:</span> <span class="s1">&#39;&amp;quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&#39;&quot;</span><span class="o">:</span> <span class="s1">&#39;&amp;#x27;&#39;</span></div><div class='line' id='LC1180'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1181'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1182'>&nbsp;&nbsp;<span class="nx">entityMap</span><span class="p">.</span><span class="nx">unescape</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">invert</span><span class="p">(</span><span class="nx">entityMap</span><span class="p">.</span><span class="nx">escape</span><span class="p">);</span></div><div class='line' id='LC1183'><br/></div><div class='line' id='LC1184'>&nbsp;&nbsp;<span class="c1">// Regexes containing the keys and values listed immediately above.</span></div><div class='line' id='LC1185'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">entityRegexes</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1186'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span><span class="o">:</span>   <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">entityMap</span><span class="p">.</span><span class="nx">escape</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">),</span></div><div class='line' id='LC1187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">unescape</span><span class="o">:</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;(&#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">entityMap</span><span class="p">.</span><span class="nx">unescape</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">)</span></div><div class='line' id='LC1188'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1189'><br/></div><div class='line' id='LC1190'>&nbsp;&nbsp;<span class="c1">// Functions for escaping and unescaping strings to/from HTML interpolation.</span></div><div class='line' id='LC1191'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s1">&#39;escape&#39;</span><span class="p">,</span> <span class="s1">&#39;unescape&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">string</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">string</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">entityRegexes</span><span class="p">[</span><span class="nx">method</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">entityMap</span><span class="p">[</span><span class="nx">method</span><span class="p">][</span><span class="nx">match</span><span class="p">];</span></div><div class='line' id='LC1196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1198'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1199'><br/></div><div class='line' id='LC1200'>&nbsp;&nbsp;<span class="c1">// If the value of the named `property` is a function then invoke it with the</span></div><div class='line' id='LC1201'>&nbsp;&nbsp;<span class="c1">// `object` as context; otherwise, return it.</span></div><div class='line' id='LC1202'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">result</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">object</span><span class="p">,</span> <span class="nx">property</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">object</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">object</span><span class="p">[</span><span class="nx">property</span><span class="p">];</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">?</span> <span class="nx">value</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1207'><br/></div><div class='line' id='LC1208'>&nbsp;&nbsp;<span class="c1">// Add your own custom functions to the Underscore object.</span></div><div class='line' id='LC1209'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">each</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">functions</span><span class="p">(</span><span class="nx">obj</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">func</span> <span class="o">=</span> <span class="nx">_</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">];</span></div><div class='line' id='LC1214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">func</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">args</span><span class="p">));</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1218'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1219'><br/></div><div class='line' id='LC1220'>&nbsp;&nbsp;<span class="c1">// Generate a unique integer id (unique within the entire client session).</span></div><div class='line' id='LC1221'>&nbsp;&nbsp;<span class="c1">// Useful for temporary DOM ids.</span></div><div class='line' id='LC1222'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">idCounter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1223'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">uniqueId</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">id</span> <span class="o">=</span> <span class="o">++</span><span class="nx">idCounter</span> <span class="o">+</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">prefix</span> <span class="o">?</span> <span class="nx">prefix</span> <span class="o">+</span> <span class="nx">id</span> <span class="o">:</span> <span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1227'><br/></div><div class='line' id='LC1228'>&nbsp;&nbsp;<span class="c1">// By default, Underscore uses ERB-style template delimiters, change the</span></div><div class='line' id='LC1229'>&nbsp;&nbsp;<span class="c1">// following template settings to use alternative delimiters.</span></div><div class='line' id='LC1230'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">evaluate</span>    <span class="o">:</span> <span class="sr">/&lt;%([\s\S]+?)%&gt;/g</span><span class="p">,</span></div><div class='line' id='LC1232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">interpolate</span> <span class="o">:</span> <span class="sr">/&lt;%=([\s\S]+?)%&gt;/g</span><span class="p">,</span></div><div class='line' id='LC1233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escape</span>      <span class="o">:</span> <span class="sr">/&lt;%-([\s\S]+?)%&gt;/g</span></div><div class='line' id='LC1234'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1235'><br/></div><div class='line' id='LC1236'>&nbsp;&nbsp;<span class="c1">// When customizing `templateSettings`, if you don&#39;t want to define an</span></div><div class='line' id='LC1237'>&nbsp;&nbsp;<span class="c1">// interpolation, evaluation or escaping regex, we need one that is</span></div><div class='line' id='LC1238'>&nbsp;&nbsp;<span class="c1">// guaranteed not to match.</span></div><div class='line' id='LC1239'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">noMatch</span> <span class="o">=</span> <span class="sr">/(.)^/</span><span class="p">;</span></div><div class='line' id='LC1240'><br/></div><div class='line' id='LC1241'>&nbsp;&nbsp;<span class="c1">// Certain characters need to be escaped so that they can be put into a</span></div><div class='line' id='LC1242'>&nbsp;&nbsp;<span class="c1">// string literal.</span></div><div class='line' id='LC1243'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">escapes</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;&#39;&quot;</span><span class="o">:</span>      <span class="s2">&quot;&#39;&quot;</span><span class="p">,</span></div><div class='line' id='LC1245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\\&#39;</span><span class="o">:</span>     <span class="s1">&#39;\\&#39;</span><span class="p">,</span></div><div class='line' id='LC1246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\r&#39;</span><span class="o">:</span>     <span class="s1">&#39;r&#39;</span><span class="p">,</span></div><div class='line' id='LC1247'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\n&#39;</span><span class="o">:</span>     <span class="s1">&#39;n&#39;</span><span class="p">,</span></div><div class='line' id='LC1248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\t&#39;</span><span class="o">:</span>     <span class="s1">&#39;t&#39;</span><span class="p">,</span></div><div class='line' id='LC1249'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\u2028&#39;</span><span class="o">:</span> <span class="s1">&#39;u2028&#39;</span><span class="p">,</span></div><div class='line' id='LC1250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\u2029&#39;</span><span class="o">:</span> <span class="s1">&#39;u2029&#39;</span></div><div class='line' id='LC1251'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1252'><br/></div><div class='line' id='LC1253'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">escaper</span> <span class="o">=</span> <span class="sr">/\\|&#39;|\r|\n|\t|\u2028|\u2029/g</span><span class="p">;</span></div><div class='line' id='LC1254'><br/></div><div class='line' id='LC1255'>&nbsp;&nbsp;<span class="c1">// JavaScript micro-templating, similar to John Resig&#39;s implementation.</span></div><div class='line' id='LC1256'>&nbsp;&nbsp;<span class="c1">// Underscore templating handles arbitrary delimiters, preserves whitespace,</span></div><div class='line' id='LC1257'>&nbsp;&nbsp;<span class="c1">// and correctly escapes quotes within interpolated code.</span></div><div class='line' id='LC1258'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">settings</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1259'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">render</span><span class="p">;</span></div><div class='line' id='LC1260'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">defaults</span><span class="p">({},</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">templateSettings</span><span class="p">);</span></div><div class='line' id='LC1261'><br/></div><div class='line' id='LC1262'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Combine delimiters into one regular expression via alternation.</span></div><div class='line' id='LC1263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">matcher</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">([</span></div><div class='line' id='LC1264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">escape</span> <span class="o">||</span> <span class="nx">noMatch</span><span class="p">).</span><span class="nx">source</span><span class="p">,</span></div><div class='line' id='LC1265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">interpolate</span> <span class="o">||</span> <span class="nx">noMatch</span><span class="p">).</span><span class="nx">source</span><span class="p">,</span></div><div class='line' id='LC1266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">evaluate</span> <span class="o">||</span> <span class="nx">noMatch</span><span class="p">).</span><span class="nx">source</span></div><div class='line' id='LC1267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">].</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;|&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;|$&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">);</span></div><div class='line' id='LC1268'><br/></div><div class='line' id='LC1269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Compile the template source, escaping string literals appropriately.</span></div><div class='line' id='LC1270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">source</span> <span class="o">=</span> <span class="s2">&quot;__p+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">matcher</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">escape</span><span class="p">,</span> <span class="nx">interpolate</span><span class="p">,</span> <span class="nx">evaluate</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span></div><div class='line' id='LC1274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">escaper</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="s1">&#39;\\&#39;</span> <span class="o">+</span> <span class="nx">escapes</span><span class="p">[</span><span class="nx">match</span><span class="p">];</span> <span class="p">});</span></div><div class='line' id='LC1275'><br/></div><div class='line' id='LC1276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">escape</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;+\n((__t=(&quot;</span> <span class="o">+</span> <span class="nx">escape</span> <span class="o">+</span> <span class="s2">&quot;))==null?&#39;&#39;:_.escape(__t))+\n&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">interpolate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;+\n((__t=(&quot;</span> <span class="o">+</span> <span class="nx">interpolate</span> <span class="o">+</span> <span class="s2">&quot;))==null?&#39;&#39;:__t)+\n&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">evaluate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;;\n&quot;</span> <span class="o">+</span> <span class="nx">evaluate</span> <span class="o">+</span> <span class="s2">&quot;\n__p+=&#39;&quot;</span><span class="p">;</span></div><div class='line' id='LC1284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">index</span> <span class="o">=</span> <span class="nx">offset</span> <span class="o">+</span> <span class="nx">match</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC1287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+=</span> <span class="s2">&quot;&#39;;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC1289'><br/></div><div class='line' id='LC1290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If a variable is not specified, place data values in local scope.</span></div><div class='line' id='LC1291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">variable</span><span class="p">)</span> <span class="nx">source</span> <span class="o">=</span> <span class="s1">&#39;with(obj||{}){\n&#39;</span> <span class="o">+</span> <span class="nx">source</span> <span class="o">+</span> <span class="s1">&#39;}\n&#39;</span><span class="p">;</span></div><div class='line' id='LC1292'><br/></div><div class='line' id='LC1293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">=</span> <span class="s2">&quot;var __t,__p=&#39;&#39;,__j=Array.prototype.join,&quot;</span> <span class="o">+</span></div><div class='line' id='LC1294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;print=function(){__p+=__j.call(arguments,&#39;&#39;);};\n&quot;</span> <span class="o">+</span></div><div class='line' id='LC1295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">source</span> <span class="o">+</span> <span class="s2">&quot;return __p;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC1296'><br/></div><div class='line' id='LC1297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Function</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">variable</span> <span class="o">||</span> <span class="s1">&#39;obj&#39;</span><span class="p">,</span> <span class="s1">&#39;_&#39;</span><span class="p">,</span> <span class="nx">source</span><span class="p">);</span></div><div class='line' id='LC1299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="nx">source</span><span class="p">;</span></div><div class='line' id='LC1301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC1302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1303'><br/></div><div class='line' id='LC1304'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="k">return</span> <span class="nx">render</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC1305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">template</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">render</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC1307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1308'><br/></div><div class='line' id='LC1309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Provide the compiled function source as a convenience for precompilation.</span></div><div class='line' id='LC1310'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">template</span><span class="p">.</span><span class="nx">source</span> <span class="o">=</span> <span class="s1">&#39;function(&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">variable</span> <span class="o">||</span> <span class="s1">&#39;obj&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;){\n&#39;</span> <span class="o">+</span> <span class="nx">source</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span><span class="p">;</span></div><div class='line' id='LC1311'><br/></div><div class='line' id='LC1312'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC1313'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1314'><br/></div><div class='line' id='LC1315'>&nbsp;&nbsp;<span class="c1">// Add a &quot;chain&quot; function, which will delegate to the wrapper.</span></div><div class='line' id='LC1316'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">chain</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1317'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">chain</span><span class="p">();</span></div><div class='line' id='LC1318'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1319'><br/></div><div class='line' id='LC1320'>&nbsp;&nbsp;<span class="c1">// OOP</span></div><div class='line' id='LC1321'>&nbsp;&nbsp;<span class="c1">// ---------------</span></div><div class='line' id='LC1322'>&nbsp;&nbsp;<span class="c1">// If Underscore is called as a function, it returns a wrapped object that</span></div><div class='line' id='LC1323'>&nbsp;&nbsp;<span class="c1">// can be used OO-style. This wrapper holds altered versions of all the</span></div><div class='line' id='LC1324'>&nbsp;&nbsp;<span class="c1">// underscore functions. Wrapped objects may be chained.</span></div><div class='line' id='LC1325'><br/></div><div class='line' id='LC1326'>&nbsp;&nbsp;<span class="c1">// Helper function to continue chaining intermediate results.</span></div><div class='line' id='LC1327'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_chain</span> <span class="o">?</span> <span class="nx">_</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">chain</span><span class="p">()</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC1329'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1330'><br/></div><div class='line' id='LC1331'>&nbsp;&nbsp;<span class="c1">// Add all of the Underscore functions to the wrapper object.</span></div><div class='line' id='LC1332'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">mixin</span><span class="p">(</span><span class="nx">_</span><span class="p">);</span></div><div class='line' id='LC1333'><br/></div><div class='line' id='LC1334'>&nbsp;&nbsp;<span class="c1">// Add all mutator Array functions to the wrapper.</span></div><div class='line' id='LC1335'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;pop&#39;</span><span class="p">,</span> <span class="s1">&#39;push&#39;</span><span class="p">,</span> <span class="s1">&#39;reverse&#39;</span><span class="p">,</span> <span class="s1">&#39;shift&#39;</span><span class="p">,</span> <span class="s1">&#39;sort&#39;</span><span class="p">,</span> <span class="s1">&#39;splice&#39;</span><span class="p">,</span> <span class="s1">&#39;unshift&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC1339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;shift&#39;</span> <span class="o">||</span> <span class="nx">name</span> <span class="o">==</span> <span class="s1">&#39;splice&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="k">delete</span> <span class="nx">obj</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC1341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC1342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1343'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1344'><br/></div><div class='line' id='LC1345'>&nbsp;&nbsp;<span class="c1">// Add all accessor Array functions to the wrapper.</span></div><div class='line' id='LC1346'>&nbsp;&nbsp;<span class="nx">each</span><span class="p">([</span><span class="s1">&#39;concat&#39;</span><span class="p">,</span> <span class="s1">&#39;join&#39;</span><span class="p">,</span> <span class="s1">&#39;slice&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1347'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">method</span> <span class="o">=</span> <span class="nx">ArrayProto</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1348'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">));</span></div><div class='line' id='LC1350'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1351'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1352'><br/></div><div class='line' id='LC1353'>&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC1354'><br/></div><div class='line' id='LC1355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Start chaining a wrapped Underscore object.</span></div><div class='line' id='LC1356'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chain</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">_chain</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC1360'><br/></div><div class='line' id='LC1361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Extracts the result from a wrapped and chained object.</span></div><div class='line' id='LC1362'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_wrapped</span><span class="p">;</span></div><div class='line' id='LC1364'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1365'><br/></div><div class='line' id='LC1366'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1367'><br/></div><div class='line' id='LC1368'>&nbsp;&nbsp;<span class="c1">// AMD registration happens at the end for compatibility with AMD loaders</span></div><div class='line' id='LC1369'>&nbsp;&nbsp;<span class="c1">// that may not enforce next-turn semantics on modules. Even though general</span></div><div class='line' id='LC1370'>&nbsp;&nbsp;<span class="c1">// practice for AMD registration is to be anonymous, underscore registers</span></div><div class='line' id='LC1371'>&nbsp;&nbsp;<span class="c1">// as a named module because, like jQuery, it is a base library that is</span></div><div class='line' id='LC1372'>&nbsp;&nbsp;<span class="c1">// popular enough to be bundled in a third party lib, but not be part of</span></div><div class='line' id='LC1373'>&nbsp;&nbsp;<span class="c1">// an AMD load request. Those cases could generate an error when an</span></div><div class='line' id='LC1374'>&nbsp;&nbsp;<span class="c1">// anonymous define() is called outside of a loader request.</span></div><div class='line' id='LC1375'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span><span class="s1">&#39;underscore&#39;</span><span class="p">,</span> <span class="p">[],</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">;</span></div><div class='line' id='LC1378'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1379'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1380'><span class="p">}).</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.10076s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

