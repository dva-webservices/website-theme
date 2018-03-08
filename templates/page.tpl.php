<?php /*
<html class="js" lang="en">

<body class="uikit-body uikit-grid">
  */ ?>
  <noscript><p role="alert">This website needs JavaScript to work properly.</p></noscript>
  <nav class="uikit-skip-link"><a class="uikit-skip-link__link" href="#content">Skip to main content</a></nav>
  <header class="uikit-header landing-page">
  <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
  <div class="container-fluid header-top">
       <div class="container">
  
         <?php print render($page['header_top']); ?>
       </div>
  </div>

    <div class="container">
    	<?php if ($logo): ?>
        	<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
  	<?php endif; ?>  
        <sup class="beta large">Beta</sup>
		
	   
	   
	   <div id="block-search-api-page-default-search" class="block block-search-api-page contextual-links-region last odd">

      <!--div class="contextual-links-wrapper contextual-links-processed"><a class="contextual-links-trigger toc-filter-processed contextual-links-trigger-active" href="#">Configure</a><ul class="contextual-links"><li class="search-api-page-edit first"><a href="/admin/config/search/search_api/page/default_search/edit?destination=node/12">Edit search page</a></li>
<li class="block-configure last"><a href="/admin/structure/block/manage/search_api_page/default_search/configure?destination=node/12">Configure block</a></li>
</ul></div-->
  <form class="search-form-widget" action="/" method="post" id="search-api-page-search-form-default-search" accept-charset="UTF-8"><div><div class="form-item form-type-textfield form-item-keys-1">
  <label class="element-invisible" for="edit-keys-1">Enter your keywords </label>
 <input placeholder="Enter your keywords" type="text" id="edit-keys-1" name="keys_1" value="" size="15" maxlength="128" class="form-text">
</div>
<input type="hidden" name="id" value="1">
<button type="submit" id="edit-submit-1" name="op" value="Search" class="uikit-btn form-submit-btn"><i class="fas fa-search"></i></button>
<input type="hidden" name="form_build_id" value="form-5Hc_K8xxQn9sNT4IIgIt6gD1GqOymE1oLTF7vr_60jc">
<input type="hidden" name="form_id" value="search_api_page_search_form_default_search">
</div></form>
</div>
		
	
    </div>
      <div class="container-fluid navigation">
      <div class="container">
	<?php print render($page['navigation']); ?>
      </div>
      </div>
      
  </header>
  
  <main>
    <div id="page">
      <section>
	<div id="content-top" class="container-fluid hero-section">
	  <div class="container">
  		<?php print render($page['highlighted']); ?>
 		<?php print $breadcrumb; ?>  
 		<a id="main-content"></a>
      		<?php print render($title_prefix); ?>
     		<?php if ($title): ?>
		        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      		<?php endif; ?>
      		

	  </div>
	  <?php print render($page['content_top']); ?>
	</div>
     </section>
     <section>
  	<div id="main" class="container">
    	<div id="content" class="column" role="main">
      		<a href="#skip-link" id="skip-content" class="element-invisible">Go to top of page</a>
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
  </section>
  <section>
  	<div id="content-bottom" class="container-fluid">
  		<?php print render($page['content_bottom']); ?>
  	</div>
  </section> 
  </div>
  </main>
  <footer class="uikit-footer" role="contentinfo">
    <div class="container">    
		<!--a href="javascript:" id="return-to-top" class=""><i><img alt="Button for returning to the top of the current page." src="../../docs/images/ico-gototop-white.svg" width=20 height=20></i></a-->
        <?php print render($page['footer']); ?>
    </div>
  </footer>