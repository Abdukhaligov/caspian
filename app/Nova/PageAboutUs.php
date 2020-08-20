<?php

namespace App\Nova;

use BayAreaWebPro\NovaFieldCkEditor\CkEditor;
use Digitalcloud\MultilingualNova\Multilingual;
use Emilianotisato\NovaTinyMCE\NovaTinyMCE;
use Illuminate\Http\Request;
use Infinety\Filemanager\FilemanagerField;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Whitecube\NovaFlexibleContent\Flexible;

class PageAboutUs extends Resource {

  public static $model = 'App\Models\Pages\AboutUs';
  public static $group = 'Pages';
  public static $title = 'id';
  public static $search = ['id'];

  public static function label() { return "About Us "; }

  public static function singleRecord(): bool { return true; }

  public static function singleRecordId(): bool { return 1; }


  public function fields(Request $request) {
    return [
        Text::make('Title'),
        NovaTinyMCE::make('Body')
            ->options([
                'plugins' => [
                    'lists preview hr anchor pagebreak image wordcount fullscreen directionality paste textpattern'
                ],
                'toolbar' => 'undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | image | bullist numlist outdent indent | link',
                'use_lfm' => true
            ]),


//        Flexible::make('Team')
//            ->addLayout('Member', 'Data', [
//                Text::make('Name', 'name')
//                    ->rules('required'),
//                Text::make('Job Title', 'job_title')
//                    ->rules('required'),
//                FilemanagerField::make('Photo', 'photo')
//                    ->rules('required')
//                    ->folder('team')
//                    ->displayAsImage()
//                    ->hideCreateFolderButton()
//                    ->hideDeleteFileButton(),
//                Flexible::make('Social Networks', 'social_networks')
//                    ->addLayout('Social Network', 'Data', [
//                        Select::make('Network', 'network')->options([
//                            'fa-facebook-f' => 'Facebook',
//                            'fa-twitter' => 'Twitter',
//                            'fa-behance' => 'Behance',
//                            'fa-linkedin-in' => 'LinkedIn',
//                            'fa-instagram' => 'Instagram',
//                            'fa-youtube' => 'YouTube',])
//                            ->rules('required'),
//                        Text::make('Link', 'link')
//                            ->rules('required'),
//                    ]),
//            ]),
    ];
  }

}
