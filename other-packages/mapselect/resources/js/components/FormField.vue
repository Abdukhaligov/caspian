<template>
    <default-field :field="field">
        <template slot="field">
            <div class="google-map" :id="mapName"></div><br>
            <input :id="field.name" type="text"
                   class="w-full form-control form-input form-input-bordered"
                   :class="errorClasses"
                   placeholder="Latitude"
                   v-model="latitude"
            />
            <br><br>
            <input  type="text"
                   class="w-full form-control form-input form-input-bordered"
                   :class="errorClasses"
                   placeholder="Longitude"
                   v-model="longitude"
            />
            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>

        </template>
    </default-field>
</template>
<style scoped>
    .google-map {
        width: 720px;
        height: 300px;
        margin: 0 auto;
        background: gray;
        border:solid 1px #ccc;
    }
</style>
<script>
    import { FormField, HandlesValidationErrors } from 'laravel-nova'

    export default {
        name: 'google-map',
        mixins: [FormField, HandlesValidationErrors],
        props: ['resourceName', 'resourceId', 'field'],
        data: function () {
            return {
                mapName: this.name + "-map",
                latitude:(this.field.value)?parseFloat(this.field.value.split(",")[0]):'',
                longitude:(this.field.value)?parseFloat(this.field.value.split(",")[1]):'',

            }
        },
        mounted: function () {

            const element = document.getElementById(this.mapName);
            const options = {
                zoom: this.field.zoom || 4,
                center: new google.maps.LatLng(this.latitude || this.field.lat, this.longitude|| this.field.lng)
            }
            const map = new google.maps.Map(element, options);
            var previousMarker;
            var address = this;

            var marker = new google.maps.Marker({
                position: {
                    lat:this.latitude,
                    lng:this.longitude
                },
                map: map
            });
            google.maps.event.addListener(map, 'click', (event)=> {
                if(marker){
                    marker.setMap(null);
                }
                if (previousMarker) {
                    previousMarker.setMap(null);
                }
                previousMarker = new google.maps.Marker({
                    position: event.latLng,
                    map: map
                });
                var geocoder = new google.maps.Geocoder;
                this.value=event.latLng.lat()+","+event.latLng.lng();
                this.latitude=event.latLng.lat();
                this.longitude=event.latLng.lng();

            });
        },
        methods: {
            /*
             * Set the initial, internal value for the field.
             */
            setInitialValue() {
                this.value = this.field.value || '';
                this.lat=this.field.lat || '';
                this.lng=this.field.lng || '';
            },
            /**
             * Fill the given FormData object with the field's internal value.
             */
            fill(formData) {
                formData.append(this.field.attribute, this.value || '')
            },

            /**
             * Update the field's internal value.
             */
            handleChangeLat(value) {
                this.lat = value
            },
            handleChangeLng(value) {
                this.lng = value
            }
        },
    }
</script>
