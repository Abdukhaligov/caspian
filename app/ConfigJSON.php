<?php

namespace App;

use App;
use App\Models\Pages\Initial;
use Auth;
use Illuminate\Database\Eloquent\Model;
use Request;
use Storage;

class ConfigJSON extends Model {
  public static function getRoutes() {
    $routes = [
        [
            "title" => App\Models\Pages\Home::first()->title,
            "link" => route('home'),
            "active" => Request::url() == route('home') ? true : false,
        ],
        [
            "title" => __('static.about'),
            "link" => "#",
            "active" => Request::is('about*') ? true : false,
            "children" => [
                [
                    "title" => App\Models\Pages\AboutUs::first()->title,
                    "link" => route('about'),
                    "active" => Request::url() == route('about') ? true : false,
                ],
                [
                    "title" => App\Models\Pages\Topics::first()->title,
                    "link" => route('topics'),
                    "active" => Request::url() == route('topics') ? true : false,
                ],
                [
                    "title" => App\Models\Pages\Committee::first()->title,
                    "link" => route('committee'),
                    "active" => Request::url() == route('committee') ? true : false,
                ],
                [
                    "title" => App\Models\Pages\Speakers::first()->title,
                    "link" => route('speakers'),
                    "active" => Request::url() == route('speakers') ? true : false,
                ],
            ]
        ],
        [
            "title" => App\Models\Pages\Contacts::first()->title,
            "link" => route('contacts'),
            "active" => Request::url() == route('contacts') ? true : false,
        ],
        [
            "title" => __('static.media'),
            "link" => "#",
            "active" => Request::is('media*') ? true : false,
            "children" => [
                [
                    "title" => App\Models\Pages\Gallery::first()->title,
                    "link" => route('gallery'),
                    "active" => Request::url() == route('gallery') ? true : false,
                ],
                [
                    "title" => App\Models\Pages\News::first()->title,
                    "link" => route('news'),
                    "active" => Request::url() == route('news') ? true : false,
                ],
            ]
        ]
    ];

    return json_encode($routes);
  }

  public static function getLocale() {
    $locale = [
        "en" => [
            "link" => "lang/eng",
            "title" => "EN",
            "img" => asset('omnivus/images/flag-1.jpg')
        ],
        "ru" => [
            "link" => "lang/ru",
            "title" => "RU",
            "img" => asset('omnivus/images/flag-2.jpg')
        ]
    ];

    switch (App::getLocale()) {
      case "en":
        $locale = [
            "link" => "/lang/ru",
            "title" => "RU",
            "img" => asset('omnivus/images/flag-2.jpg')
        ];
        break;
      case "ru":
        $locale = [
            "link" => "/lang/en",
            "title" => "EN",
            "img" => asset('omnivus/images/flag-1.jpg')
        ];
        break;
    }

    return json_encode($locale);
  }

  public static function getData() {

    if (Auth::user()) {
      $title = __('static.personal_cabinet');
      $url = route('cabinet');
    } else {
      $title = __('static.sign_in') . " \\ " . __('static.sign_up');
      $url = route('login');
    }

    $initial = Initial::getData();

    $data = [
        "logo" => Storage::disk('public')->url($initial->logo),
        "phone" => $initial->phone,
        "email" => $initial->email,
        "socialNetworks" => json_decode($initial->social_networks),
        "cabinet" => [
            "title" => $title,
            "url" => $url,
            "loggedIn" => Auth::user() ? true : false,
            "logoutTitle" => __('static.logout'),
            "logoutUrl" => route('logout')
        ],
        "domain" => Request::root(),
        "currentPage" => Request::url()
    ];

    return json_encode($data);
  }
}
