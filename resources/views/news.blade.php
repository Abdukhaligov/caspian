@extends('layouts.init')

@section('content')

  <page-banner-component :title="{{ json_encode($data->title) }}"></page-banner-component>

@endsection
