<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{

    public function index()
    {

        $topics = Topic::where('parent_id', null)->get();

        function children ($topics) {
            foreach ($topics as $topic) {
                $children = $topic->children;
                if($children->count() > 0){
                    children($children);
                }
            }
        }

        children($topics);

        return $topics;

    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Topic $topic)
    {
        //
    }

    public function edit(Topic $topic)
    {
        //
    }

    public function update(Request $request, Topic $topic)
    {
        //
    }

    public function destroy(Topic $topic)
    {
        //
    }
}
