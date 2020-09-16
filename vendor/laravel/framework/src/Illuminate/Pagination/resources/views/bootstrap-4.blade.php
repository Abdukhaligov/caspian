@if ($paginator->hasPages())
  <nav class="pagination wow fadeIn" data-wow-delay=".2s">
    {{-- Previous Page Link --}}
    @if ($paginator->onFirstPage())
      <a class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
        <i class="icon-arrow-back" aria-hidden="true"></i>
      </a>
    @else
      <a href="{{ $paginator->previousPageUrl() }}" aria-label="@lang('pagination.previous')">
        <i class="icon-arrow-back"></i>
      </a>
    @endif

    {{-- Pagination Elements --}}
    @foreach ($elements as $element)
      {{-- "Three Dots" Separator --}}
      @if (is_string($element))
        <a class="active" aria-current="page" aria-disabled="true">{{ $element }}</a>
      @endif

      {{-- Array Of Links --}}
      @if (is_array($element))
        @foreach ($element as $page => $url)
          @if ($page == $paginator->currentPage())
            <a class="active" aria-current="page">{{ $page }}</a>
          @else
            <a href="{{ $url }}">{{ $page }}</a>
          @endif
        @endforeach
      @endif
    @endforeach

    {{-- Next Page Link --}}
    @if ($paginator->hasMorePages())
      <a href="{{ $paginator->nextPageUrl() }}" class="next " rel="next" aria-label="Next">
        <i class="icon-arrow-forward" aria-hidden="true"></i>
      </a>
    @else
      <a href="{{ $paginator->nextPageUrl() }}" class="next disabled" rel="next" aria-label="Next">
        <i class="icon-arrow-forward" aria-hidden="true"></i>
      </a>
    @endif
  </nav>
@endif
