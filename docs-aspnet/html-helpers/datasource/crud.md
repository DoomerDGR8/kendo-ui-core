---
title: CRUD Operations
page_title: DataSource CRUD
description: "Learn how to define the CRUD options in the DataSource component for {{ site.framework }}."
slug: htmlhelper_datasourcecrud
---

# Crud Operations

> `Model.Id` is required for the proper execution of Update, Create and Destroy.

## Read

The `Read` method sets the action method which is responsible for reading data items and for returning them as JSON.

```HtmlHelper
    .Ajax()
    .Read(read => read.Action(/* action */"Products_Read", /* controller */"Home"))
```
```Controller

    public ActionResult Products_Read([DataSourceRequest]DataSourceRequest request)
    {
        using (var northwind = new SampleContext())
        {
            IEnumerable<Product> products = northwind.Products;
            DataSourceResult result = products.ToDataSourceResult(request);
            return Json(result);
        }
    }
```
## Create

The `Create` method sets the action method which is responsible for saving new data items.

```HtmlHelper
    .Ajax()
    .Model(model => model.Id(product => product.ProductID))
    .Create(create => create.Action(/* action */"Products_Create", /* controller *"Home"))
    .Read(read => read.Action("Products_Read", "Home"))
```
```Controller

    public ActionResult Products_Create([DataSourceRequest]DataSourceRequest request, Product newProduct)
    {
        if (newProduct != null && ModelState.IsValid)
        {
            productService.Create(newProduct);
        }
        return Json(new[] { newProduct }.ToDataSourceResult(request, ModelState));
    }
```

## Update

The `Update` method sets the action method which is responsible for saving updated data items.

```HtmlHelper
    .Ajax()
    .Model(model => model.Id(product => product.ProductID))
    .Update(update => update.Action(/* action */"Products_Update", /* controller */"Home"))
    .Read(read => read.Action("Products_Read", "Home"))
```
```Controller

    public ActionResult Products_Update([DataSourceRequest]DataSourceRequest request, Product updatedProduct)
    {
        if (updatedProduct != null && ModelState.IsValid)
        {
            productService.Update(updatedProduct);
        }
        return Json(new[] { updatedProduct }.ToDataSourceResult(request, ModelState));
    }
```

## Destroy

The `Destroy` method sets the action method which is responsible for destroying data items.

```HtmlHelper
    .Ajax()
    .Model(model => model.Id(product => product.ProductID))
    .Destroy(destroy => destroy.Action(/* action */"Products_Destroy", /* controller*/ "Home"))
    .Read(read => read.Action("Products_Read", "Home"))
```
```Controller

    public ActionResult Products_Destroy([DataSourceRequest]DataSourceRequest request, Product product)
    {
        if (product != null)
        {
            productService.Destroy(product);
        }
        return Json(new[] { product }.ToDataSourceResult(request, ModelState));
    }
```

## Batch Operation

The `Batch` method configures the batch `create`, `update` and `destroy` operations. This means that all changes are kept on the client until a data source [`sync()`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource/methods/sync) occurs either programmatically or via a `Save Changes` button click in the grid for example. By default, the batch operations are disabled.

```HtmlHelper
    .Ajax()
    .Batch(true)
    .Model(model => model.Id(product => product.ProductID))
    .Update(update => update.Action(/* action */"Products_Update", /* controller */ "Home"))
    .Read(read => read.Action("Products_Read", "Home"))
```
```Controller

    public ActionResult Products_Update([DataSourceRequest]DataSourceRequest request, [Bind(Prefix = "models")] IEnumerable<Product> updatedProducts)
    {
        if (updatedProducts != null && ModelState.IsValid)
        {
            foreach (var product in updatedProducts)
            {
                productService.Update(product);
            }
        }
        return Json(updatedProducts.ToDataSourceResult(request, ModelState));
    }
```

## See Also

* [Server-Side API](/api/datasource)
* [Model Definition]({% slug htmlhelper_datasourcemodel %})
