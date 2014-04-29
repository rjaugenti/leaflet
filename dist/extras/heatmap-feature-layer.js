/*! Esri-Leaflet - v0.0.1-beta.4 - 2014-04-29
*   Copyright (c) 2014 Environmental Systems Research Institute, Inc.
*   Apache License*/
L.esri.HeatMapFeatureLayer=L.esri.FeatureManager.extend({initialize:function(a,b){L.esri.FeatureManager.prototype.initialize.call(this,a,b),this.index=L.esri._rbush(),b=L.setOptions(this,b),this._cache={},this._active={},this.heat=new L.heatLayer([],b)},onAdd:function(){L.esri.FeatureManager.prototype.onAdd.call(this),this._map.addLayer(this.heat)},onRemove:function(){L.esri.FeatureManager.prototype.onRemove.call(this),this._map.removeLayer(this.heat)},createLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=a[b],d=c.id,e=new L.LatLng(c.geometry.coordinates[1],c.geometry.coordinates[0]);this._cache[d]=e,!this._active[d]&&(!this._timeEnabled||this._timeEnabled&&this._featureWithinTimeRange(c))&&(this._active[d]=e,this.heat._latlngs.push(e))}this.heat.redraw()},addLayers:function(a){for(var b=a.length-1;b>=0;b--){var c=a[b];if(!this._active[c]){var d=this._cache[c];this.heat._latlngs.push(d),this._active[c]=d}}this.heat.redraw()},removeLayers:function(a){for(var b=[],c=a.length-1;c>=0;c--){var d=a[c];this._active[d]&&delete this._active[d]}for(var e in this._active)b.push(this._active[e]);this.heat.setLatLngs(b)}});