<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use App;
use Auth;
use Request;
use Storage;

class Initial extends Model {

  protected $table = 'page_initial';
  use HasTranslations;
  public $translatable = ['title'];

  public static function getData() { return self::first(); }

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
                [
                    "title" => App\Models\Pages\Chairmen::first()->title,
                    "link" => route('chairmen'),
                    "active" => Request::url() == route('chairmen') ? true : false,
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

    return $routes;
  }


}
