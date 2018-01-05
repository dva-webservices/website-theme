 <?php /*
<html class="js" lang="en">

<body class="uikit-body uikit-grid">
  */ ?>
  <noscript><p role="alert">This website needs JavaScript to work properly.</p></noscript>
  <nav class="uikit-skip-link"><a class="uikit-skip-link__link" href="#content">Skip to main content</a></nav>
  <header class="uikit-header landing-page">
    <div class="container">

    <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
  <?php endif; ?>
  
        <h1>Department of Veterans Affairs <sup class="beta large">Beta</sup></h1>
<?php print render($page['navigation']); ?>
    </div>
  </header>
  
  <main>
    <div class="container" id="page">

  <?php print render($page['highlighted']); ?>

  <?php print $breadcrumb; ?>

  <div id="main">

    <div id="content" class="column" role="main">

      <a href="#skip-link" id="skip-content" class="element-invisible">Go to top of page</a>

      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars" role="complementary">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

    </div>
  </main>
  <footer class="uikit-footer" role="contentinfo">
    <div class="container">
		<a href="javascript:" id="return-to-top" class=""><i><img alt="Button for returning to the top of the current page." src="../../docs/images/ico-gototop-white.svg" width=20 height=20></i></a>

				<div class="row">
					<div class="col-sm-4">
						<img src="<?php print $logo; ?>" alt="Department of Veteran's Affairs logo">
					</div>
					<div class="col-sm-8">
        <?php print render($page['footer']); ?>
					</div>
				</div>
    </div>
  </footer>