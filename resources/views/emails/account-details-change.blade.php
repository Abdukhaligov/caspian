@component('mail::message')
  # Hi {{$data['name']}}, your account details was changed!

  Following are your account details:

  ### Working place: {{$data['company']}}
  ### Position: {{$data['job_title']}}
  ### Participation: {{$data['membership']->name}}
  @if($data['degree'])### Degree: {{$data['degree']->name}}<br>@endif


  Thanks,<br>
  {{ config('app.name') }}
@endcomponent
