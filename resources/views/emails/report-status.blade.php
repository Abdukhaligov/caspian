@component('mail::message')
  # Hi {{$data['user']->name}}, your report was changed!

  Following are your report details:

  ### Status: {{$data['status']}}
  ### Topic: {{$data['topic']->name}}
  ### Title: {{$data['name']}}
  ### Description: {{$data['description']}}
  ### Created At: {{$data['created_at']}}

  @if($data["file"]) @component('mail::button', ['url' => Storage::disk('reports')->url($data["file"])])
    Download File
  @endcomponent @endif

  Thanks,<br>
  {{ config('app.name') }}
@endcomponent


