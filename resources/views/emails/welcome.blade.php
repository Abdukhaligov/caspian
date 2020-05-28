@component('mail::message')
# Hi {{$data['name']}}, we’re glad you’re here!

Following are your account details:

### Email: {{$data['email']}}
### Phone: {{$data['phone']}}

{{--@component('mail::button', ['url' => ''])--}}
{{--Button Text--}}
{{--@endcomponent--}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
