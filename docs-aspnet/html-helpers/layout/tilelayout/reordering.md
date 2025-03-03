---
title: Reordering
page_title: The Telerik UI TileLayout component for {{ site.framework }} Documentation | TileLayout reordering 
description: "Learn how to enable and use the reordering functionality of the Telerik UI TileLayout component for {{ site.framework }}."
slug: htmlhelpers_aspnet_tilelayout_reordering
position: 2
---

# TileLayout Reordering

The Telerik UI TileLayout for {{ site.framework }} allows you rearrange the position of the tile containers with drag and drop. 

The reordering takes advantage of the [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) mechanism and changes the [css order](https://www.w3schools.com/cssref/css3_pr_order.asp) of the item and lets the browser handle the rest.

## Enabling the Reorderable Functionality of the TileLayout

To enable the reorderable feature of the TileLayout, set the [`Reorderable()`](/api/Kendo.Mvc.UI.Fluent/TileLayoutBuilder#reorderable) method {% if site.mvc %}
and pass `true` as a parameter{% endif %}.

> To use the `Reorderable()` functionality, define headers.

The example below will render a grid with two columns which can be reordered both vertically and horizontally.


```HtmlHelper
     @(Html.Kendo().TileLayout()
        .Name("tilelayout")
        .Columns(2)
        .RowsHeight("285px")
        .ColumnsWidth("285px")
        .Containers(c => {
            c.Add().Header(h => h.Text("Item one")).BodyTemplate("Item one body").ColSpan(1).RowSpan(1);
            c.Add().Header(h => h.Text("Item two")).BodyTemplate("Item two body").ColSpan(1).RowSpan(1);
            c.Add().Header(h => h.Text("Item three")).BodyTemplate("Item three body").ColSpan(1).RowSpan(1);
        })
        .Reorderable(true)
    )
```
{% if site.core %}
```TagHelper
     <kendo-tilelayout columns="2" columns-width="285px" reorderable="true" rows-height="285px" name="tilelayout">
        <containers>
            <container body-template="Item one body" col-span="1" row-span="1">
                <container-header text="Item one"/>
            </container>
            <container body-template="Item two body" col-span="1" row-span="1">
                <container-header text="Item two"/>
            </container>
            <container body-template="Item three body" col-span="1" row-span="1">
                <container-header text="Item three"/>
            </container>
        </containers>
    </kendo-tilelayout>   
```
{% endif %}

## Event Handling

The widget triggers a [`Reorder()`](/api/Kendo.Mvc.UI.Fluent/TileLayoutEventBuilder#reordersystemstring) event which provides access to the reordered container, the old and the new index.

```HtmlHelper
    .Events(e=>e.Reorder("onReorder"))
    
    function onReorder (e) {
        console.log(e.newIndex, e.oldIndex);
    }
```
{% if site.core %}
```TagHelper
    <kendo-tilelayout name="tilelayout" columns="3" reorderable="true" on-reorder="onReorder">
    <script>
        function onReorder(e) {
            console.log(e.newIndex, e.oldIndex);
        }
    </script>
```
{% endif %}

## See Also

* [Overview of the TileLayout (Demo)](https://demos.telerik.com/{{ site.platform }}/tilelayout/index)
* [API Reference of the TileLayout](/api/tilelayout)
* [Resizing]({% slug htmlhelpers_aspnet_tilelayout_resizing %})
* [Containers]({% slug htmlhelpers_aspnet_tilelayout_containers %})
