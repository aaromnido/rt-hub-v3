import ArrowSmallRight from 'astro-heroicons/outline/ArrowSmallRight.astro';
import SectionHeader from '../SectionHeader.astro';
import CardLightVertical from '../CardLightVertical.astro';
import { items } from './SectionNews.astro';

<Fragment>
<section class="section news-section light-theme">
<div class="section-container">
<div class="section-wrapper">

<SectionHeader title="Trending <strong>Stories</strong> & Insights" subtitle="Stay ahead of the curve with the latest buzz and expert takes" />

{/** Grid */}
<div class="cards-grid">

{items.map((item) => (

<Fragment><CardLightVertical /></Fragment>

))}

</div>{/** / Grid */}

<footer class="section-footer">
<a class="secondary-button" href="{{ route('news.index') }}">
Browse all Articles <ArrowSmallRight class="w-6 h-6" />
</a>{/** / Button */}
</footer>{/** / Footer */}

</div>{/** Wrapper */}
</div>{/** / Container */}
</section>{/** / Courses section */}

</Fragment>;
