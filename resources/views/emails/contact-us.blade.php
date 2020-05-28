@component('mail::message')
  # Introduction

  The body of your message.

  # A Heading

  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos fugiat ipsam iure quaerat! Explicabo ipsa ipsam mollitia perferendis placeat provident quas quos voluptate! Distinctio laborum necessitatibus officiis provident repudiandae.

  - A list
  - goes
  - here

  @component('mail::button', ['url' => 'https://laracasts.com'])
    Visit Laracasts

  @endcomponent
  Thanks,<br>
  {{ config('app.name') }}
@endcomponent





