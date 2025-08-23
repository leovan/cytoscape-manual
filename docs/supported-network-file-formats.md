# 支持的网络文件格式

Cytoscape 将网络表示为有向图，其中节点表示实体（例如基因、蛋白质或代谢物），边表示这些实体之间的关系或相互作用。Cytoscape 中的所有边本质上都是有向的，这意味着它们具有源节点和目标节点。然而，Cytoscape 不会解释或赋予导入的图结构语义，只是保留输入数据中指定的拓扑关系。节点和边的生物学或功能意义由用户的解释和分析决定。

Cytoscape 可以读取以下格式的网络文件：

- Cytoscape Exchange Format (CX2)
- [Cytoscape.js JSON](https://js.cytoscape.org/#notation/elements-json)
- Simple interaction file (SIF or .sif format)
- Graph Markup Language (GML or .gml format)
- XGMML (extensible graph markup and modelling language).
- SBML
- BioPAX
- GraphML
- Delimited text
- Excel Workbook (.xls, .xlsx)

这些格式的复杂性和可存储信息的类型各不相同。有些格式主要关注网络拓扑，而有些格式则可以保留其他元数据，例如节点属性、边属性、视觉样式和布局信息。列出的所有文件类型（Excel 除外）均为文本文件，你可以在常规文本编辑器中编辑和查看它们。

## Cytoscape Exchange Format (CX2)

Cytoscape Exchange Format (CX2) 是一种基于 JSON 的网络数据交换格式，旨在实现 Cytoscape 生态系统中各种应用程序（包括 Cytoscape 桌面版、Cytoscape Web 版和网络数据交换 (NDEx)）之间的高效互操作性。CX2 将网络数据组织成模块化切面，每个切面都按照其自身的模式独立构建。这种面向切面的方法简化了复杂数据的处理，例如视觉样式、网络拓扑、节点和边属性以及布局坐标，从而允许在不同工具之间进行一致的解释和呈现。

CX2 最初是作为 Cytoscape 交换 (CX) 格式的演进而推出的，由 Cytoscape 和 NDEx 团队合作开发，旨在更好地支持日益复杂的生物网络及其相关元数据。CX2 通过针对 Web 应用程序优化的紧凑设计来提升性能，从而减少内存占用并提高网络数据传输效率。其可扩展的结构使其能够轻松集成新功能，而不会影响现有的兼容性，从而支持 Cytoscape 社区的未来发展。

下面显示了一个简单的 CX2 网络示例，其中包含两个节点、一条边、属性和布局坐标：

```json
[
  {
    "CXVersion": "2.0",
    "hasFragments": false
  },
  {
    "attributeDeclarations": [
      {
        "networkAttributes": {
          "name": {"d": "string"}
        },
        "nodes": {
          "name": {"d": "string"},
          "type": {"d": "string"}
        },
        "edges": {
          "interaction": {"d": "string"}
        }
      }
    ]
  },
  {
    "networkAttributes": [
      {"name": "Simple Network Example"}
    ]
  },
  {
    "nodes": [
      {"id": 1, "x": 100, "y": 200, "v": {"name": "Node A", "type": "protein"}},
      {"id": 2, "x": 300, "y": 400, "v": {"name": "Node B", "type": "protein"}}
    ]
  },
  {
    "edges": [
      {"id": 100, "s": 1, "t": 2, "v": {"interaction": "binds"}}
    ]
  },
  {
    "status": [
      {"error": "", "success": true}
    ]
  }
]
```

有关 CX2 规范、支持切面和其他示例的详细信息，请访问 [Cytoscape Exchange Format 文档](https://cytoscape.org/cx/cx2/specification/cytoscape-exchange-format-specification-%28version-2%29/)。

## Cytoscape.js JSON

从 Cytoscape 3.1.0 开始，Cytoscape 支持 [Cytoscape.js](http://cytoscape.github.io/cytoscape.js/) JSON 文件。你可以使用此功能将网络可视化文件导出到 Web 浏览器。Cytoscape.js 有两种表示网络数据的方式，当前仅支持读写数据样式图表。例如：Cytoscape 中的网络：

![](images/supported-network-file-formats/json1.png)

可以导出为如下 JSON：

```json
{
  "elements" : {
    "nodes" : [ {
      "data" : {
        "id" : "723",
        "selected" : false,
        "annotation_Taxon" : "Saccharomyces cerevisiae",
        "alias" : [ "RPL31A", "RPL34", "S000002233", "ribosomal protein L31A (L34A) (YL28)" ],
        "shared_name" : "YDL075W",
        "SUID" : 723,
        "degree_layout" : 1,
        "name" : "YDL075W"
      },
      "position" : {
        "x" : 693.0518315633137,
        "y" : -49.47506554921466
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "726",
        "selected" : false,
        "annotation_Taxon" : "Saccharomyces cerevisiae",
        "alias" : [ "RP23", "RPL16B", "S000005013", "ribosomal protein L16B (L21B) (rp23) (YL15)" ],
        "shared_name" : "YNL069C",
        "SUID" : 726,
        "degree_layout" : 1,
        "name" : "YNL069C"
      },
      "position" : {
        "x" : 627.3147710164387,
        "y" : -205.99251969655353
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "658",
        "selected" : false,
        "annotation_Taxon" : "Saccharomyces cerevisiae",
        "alias" : [ "RPL11B", "S000003317", "ribosomal protein L11B (L16B) (rp39B) (YL22)" ],
        "shared_name" : "YGR085C",
        "SUID" : 658,
        "degree_layout" : 2,
        "name" : "YGR085C"
      },
      "position" : {
        "x" : 804.3092778523762,
        "y" : -245.6235926946004
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "660",
        "selected" : false,
        "annotation_Taxon" : "Saccharomyces cerevisiae",
        "alias" : [ "KAP108", "S000002803", "SXM1" ],
        "shared_name" : "YDR395W",
        "SUID" : 660,
        "degree_layout" : 8,
        "name" : "YDR395W"
      },
      "position" : {
        "x" : 730.8733342488606,
        "y" : -157.50702317555744
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "579",
        "selected" : false,
        "annotation_Taxon" : "Saccharomyces cerevisiae",
        "alias" : [ "RPL11A", "S000006306", "ribosomal protein L11A (L16A) (rp39A) (YL22)" ],
        "shared_name" : "YPR102C",
        "SUID" : 579,
        "degree_layout" : 2,
        "name" : "YPR102C"
      },
      "position" : {
        "x" : 841.1395696004231,
        "y" : -130.77909119923908
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "578",
        "selected" : false,
        "annotation_Taxon" : "Saccharomyces cerevisiae",
        "alias" : [ "GRC5", "QSR1", "RPL10", "S000004065", "ribosomal protein L10" ],
        "shared_name" : "YLR075W",
        "SUID" : 578,
        "degree_layout" : 2,
        "name" : "YLR075W"
      },
      "position" : {
        "x" : 910.3755162556965,
        "y" : -217.0562556584676
      },
      "selected" : false
    } ],
    "edges" : [ {
      "data" : {
        "id" : "659",
        "source" : "658",
        "target" : "578",
        "selected" : false,
        "interaction" : "pp",
        "shared_interaction" : "pp",
        "shared_name" : "YGR085C (pp) YLR075W",
        "SUID" : 659,
        "name" : "YGR085C (pp) YLR075W"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "661",
        "source" : "658",
        "target" : "660",
        "selected" : false,
        "interaction" : "pp",
        "shared_interaction" : "pp",
        "shared_name" : "YGR085C (pp) YDR395W",
        "SUID" : 661,
        "name" : "YGR085C (pp) YDR395W"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "724",
        "source" : "660",
        "target" : "723",
        "selected" : false,
        "interaction" : "pp",
        "shared_interaction" : "pp",
        "shared_name" : "YDR395W (pp) YDL075W",
        "SUID" : 724,
        "name" : "YDR395W (pp) YDL075W"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "733",
        "source" : "660",
        "target" : "579",
        "selected" : false,
        "interaction" : "pp",
        "shared_interaction" : "pp",
        "shared_name" : "YDR395W (pp) YPR102C",
        "SUID" : 733,
        "name" : "YDR395W (pp) YPR102C"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "727",
        "source" : "660",
        "target" : "726",
        "selected" : false,
        "interaction" : "pp",
        "shared_interaction" : "pp",
        "shared_name" : "YDR395W (pp) YNL069C",
        "SUID" : 727,
        "name" : "YDR395W (pp) YNL069C"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "580",
        "source" : "578",
        "target" : "579",
        "selected" : false,
        "interaction" : "pp",
        "shared_interaction" : "pp",
        "shared_name" : "YLR075W (pp) YPR102C",
        "SUID" : 580,
        "name" : "YLR075W (pp) YPR102C"
      },
      "selected" : false
    } ]
  }
}
```

下图为 Cytoscape.js 中的可视化：

![](images/supported-network-file-formats/json2.png)

### 重要提示

Cytoscape 将网络和表格导出到 Cytoscape.js 时会创建一个没有样式的 JSON 文件。这意味着如果你将样式用于网络，需要将样式导出到单独的 JSON 文件中。更多信息请参见[样式](styles.md)部分。

## SIF 格式

SIF 格式仅指定了节点和交互，而其他格式则存储了有关网络布局的其他信息，并允许与各种网络程序和数据源交换网络数据。通常，由于 SIF 文件很容易通过文本编辑器或电子表格创建，因此在首次构建网络时会使用 SIF 文件导入交互信息。一旦加载了交互信息并且执行了网络布局，就可以将网络保存为 GML 或 XGMML 格式，以便与其他系统进行交互。上述列出的所有文件类型（Excel 除外）都是文本文件，你可以在常规文本编辑器中进行编辑和查看。

简单的交互格式方便从交互列表构建网络。它可以使得将不同的交互集合组合到一个更大的网络中或将新的交互添加到现有数据集中变得容易。该格式的主要缺点是不包含任何布局信息，从而使得 Cytoscape 每次加载时需要重新计算网络的布局。

SIF 文件中的行指定了源节点，关系类型（或边类型）以及一个或多个目标节点：

```sif
nodeA <relationship type> nodeB
nodeC <relationship type> nodeA
nodeD <relationship type> nodeE nodeF nodeB
nodeG
...
nodeY <relationship type> nodeZ
```

一个更具体的例子如下：

```sif
node1 typeA node2
node2 typeB node3 node4 node5
node0
```

第一行标识两个节点，分别是 `node1` 和 `node2`，以及 `node1` 和 `node2` 之间的单个关系 `typeA`。第二行指定了 3 个新节点，分别为 `node3`，`node4` 和 `node5`，`node2` 是指与第一行相同的节点。第二行还指定了 3 个关系，所有关系类型均为 `typeB`，以 `node2` 为源节点，以 `node3`，`node4` 和 `node5` 为目标节点。第二种形式只是用于指定与相同源节点具有相同类型的多个关系的简写形式。第三行指示如何指定与其他节点没有关系的节点。具有确实关系的节点不需要这种形式，因为关系的规范也隐式地标识了节点。

重复的记录将被忽略。同一节点之间的多个边必须具有不同的边类型。例如：以下指定同一对节点之间的两条边，其中一条类型为 `xx`，另一条类型为 `yy`：

```sif
node1 xx node2
node1 xx node2
node1 yy node2
```

允许存在连接到自身的边（自边）：

```sif
node1 xx node1
```

Cytoscape 中的每个节点和边都有一个名称列。对于以 SIF 格式定义的网络，节点名称应该是唯一的，因为名称相同的节点将被视为相同的节点。默认情况下，每个节点的名称将是此文件中的名称（除非使用样式将另一个字符串映射显示在节点上）。在[样式](styles.md)部分将对此进行讨论。每个边的名称将由源节点和目标节点的名称加上交互类型构成，例如：`sourceName (edgeType) targetName`。

标签 `edgeType` 可以为任何字符串。整个单词或拼接的单词可以用于定义关系类型，例如：`geneFusion`，`cogInference,`，`pullsDown`，`activates`，`degrades`，`inactivates`，`inhibits`，`phosphorylates`，`upRegulates` 等。

系统生物学社区中使用的一些常用交互类型如下：

```
pp .................. protein - protein interaction
pd .................. protein -> DNA
(e.g. transcription factor binding upstream of a regulating gene.)
```

一些不常见的交互类型如下：

```
pr .................. protein -> reaction
rc .................. reaction -> compound
cr .................. compound -> reaction
gl .................. genetic lethal relationship
pm .................. protein-metabolite interaction
mp .................. metabolite-protein interaction
```

### 分隔符

空白字符（空格或制表符）用于分隔简单交互文件格式的名称。但是在某些情况下，节点名称或边类型中也需要空格。如果文件包含任何制表符，则制表符用于分隔字段，空格将被视为名称的一部分。如果文件不包含任何制表符，则任何空格都是分隔名称的分隔符（名称不能包含空格）。

如果你的网络恰巧不包含任何边，并且节点名称看起来像边的名称，则可能意味着文件包含使解析器迷惑的散乱的制表符。另一方面，如果你的网络中的节点名称是全名的一半，那么你可能需要使用制表符来分隔节点名称和空格。

简单交互格式的网络通常存储在扩展名为 `.sif` 的文件中，Cytoscape 在浏览目录时也会识别此扩展名的文件。

## GML 格式

与 SIF 相比，GML 是许多其他网络可视化软件支持的丰富图形格式语言。GML 文件格式规范可以从如下连接获取：

<http://www.graphviewer.nl/misc/gmllanguage/gml-technical-report.pdf>

通常无法直接修改 GML 文件的内容。一旦以 SIF 格式构建了网络并进行了布局，就可以将布局保存到 GML 或从 GML 加载。加载 GML 文件时，通过 GML 文件指定属性时将产生一个名为 `Filename.style` 的新样式。

## XGMML 格式

XGMML 是 GML 的 XML 进化版本，它基于 GML 定义。除了网络数据之外，XGMML 还包含节点/边/网络列数据，更多信息请参见 Wikipedia：https://en.wikipedia.org/wiki/XGMML。

XGMML 比 GML 更受青睐，因为它提供了与所有 XML 文档类型相关的灵活性。如果不确定要使用哪个，请选择 XGMML。

如果你在读取较旧的文件遇到问题时，可以将 Java 系统属性 `cytoscape.xgmml.repair.bare.ampersands` 设置为 `true`。

仅当由于不正确的编码而无法读取 XGMML 文件或会话时才应该使用此方法。因为这会减慢读取过程，但与尝试手动编辑修复此类文件相比，这个方法还是更好的选择。

## SBML (Systems Biology Markup Language) 格式

Systems Biology Markup Language (SBML) 是一种用于描述生物网络的 XML 格式。SBML 文件格式规范请参见：http://sbml.org/documents/。

## BioPAX (Biological PAthways eXchange) 格式

BioPAX 是一种 OWL (Web Ontology Language) 文档，旨在交换生物数据。有关此格式的完整文档请参见：http://www.biopax.org/。

## GraphML

GraphML 是用于图形的一种基于 XML 的全面且易于使用的文本格式。有关此格式的完整文档请参见：http://graphml.graphdrawing.org/。

## 分隔的文本表格和 Excel 工作簿

Cytoscape 原生支持 Microsoft Excel 文件（`.xls` 和 `.xlsx`）和分隔的文本文件。这些文件中的表格包含网络数据和边列。用户可以在文件导入时指定包含源节点、目标节点、交互类型和边列的列。其他网络分析工具，例如 igraph（https://igraph.org/）具有将图形导出为简单文本文件的功能。Cytoscape 可以读取这些文本文件并据此建立网络。更多详细信息，请参考[创建网络](creating-networks.md#创建网络)部分。
