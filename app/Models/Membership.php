<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    public function parent()
    {
        return $this->belongsTo(Membership::class);
    }

    public function children()
    {
        return $this->hasMany(Membership::class, 'parent_id');
    }

    private function membershipTree($memberships)
    {
        foreach ($memberships as $membership) {
            $children = $membership->children;
            if ($children->count() > 0) {
                $this->membershipTree($children);
                $membership->hasChildren = true;
            } else {
                $membership->hasChildren = false;
            }
        }
    }

    public function showTree()
    {
        $memberships = Membership::where('parent_id', null)->get();
        $this->membershipTree($memberships);
        return $memberships;
    }

}
