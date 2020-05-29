@component('mail::message')
  # Hi {{$data['name']}}, your account password was changed!

  Thanks,<br>
  {{ config('app.name') }}
@endcomponent