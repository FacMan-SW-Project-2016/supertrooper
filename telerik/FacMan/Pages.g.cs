//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FacMan
{
    using ArtOfTest.WebAii.Core;
    using ArtOfTest.WebAii.ObjectModel;
    using ArtOfTest.WebAii.TestAttributes;
    using ArtOfTest.WebAii.TestTemplates;
    using ArtOfTest.WebAii.Controls.HtmlControls;
    
    public class Pages
    {
        private Manager _manager;
        public Pages(Manager manager)
        {
            _manager = manager;
        }
        /// <summary>
        /// Page : http://localhost/index.html 
        /// </summary>
        public FacManWilkommenPage FacManWilkommen
        {
            get
            {
                return new FacManWilkommenPage("http://localhost/index.html", _manager.ActiveBrowser.Find);
            }
        }
        /// <summary>
        /// Page : http://localhost/reportcreate.html 
        /// </summary>
        public FacManMeldungserfassungPage FacManMeldungserfassung
        {
            get
            {
                return new FacManMeldungserfassungPage("http://localhost/reportcreate.html", _manager.ActiveBrowser.Find);
            }
        }
        /// <summary>
        /// Page : http://localhost/admin.html 
        /// </summary>
        public AdministrationPage Administration
        {
            get
            {
                return new AdministrationPage("http://localhost/admin.html", _manager.ActiveBrowser.Find);
            }
        }
        /// <summary>
        /// Page : http://localhost/login.html 
        /// </summary>
        public FacManLoginPage FacManLogin
        {
            get
            {
                return new FacManLoginPage("http://localhost/login.html", _manager.ActiveBrowser.Find);
            }
        }
        /// <summary>
        /// Page : http://localhost/reportshow.html 
        /// </summary>
        public FacManMeldungsübersichtPage FacManMeldungsübersicht
        {
            get
            {
                return new FacManMeldungsübersichtPage("http://localhost/reportshow.html", _manager.ActiveBrowser.Find);
            }
        }
        public class FacManWilkommenPage : HtmlPage
        {
            public FacManWilkommenPage(string url, Find find) : 
                    base(url, find)
            {
            }
            /// <summary>
            /// Find expressions for this page
            /// </summary>
            public ExpressionDefinitions Expressions
            {
                get
                {
                    return new ExpressionDefinitions();
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [href 'Exact' reportcreate.html] AND [tagname 'Exact' a]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor MeldungAnlegenLink
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor>("href=reportcreate.html", "tagname=a");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [href 'Exact' admin.html] AND [tagname 'Exact' a]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor AdministrationLink
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor>("href=admin.html", "tagname=a");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [TagIndex 'Exact' i:0]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlControl ITag
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlControl>("TagIndex=i:0");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [href 'Exact' /login.html] AND [tagname 'Exact' a]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor AbmeldenLink
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor>("href=/login.html", "tagname=a");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [href 'Exact' reportshow.html] AND [tagname 'Exact' a]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor MeldungLink
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor>("href=reportshow.html", "tagname=a");
                }
            }
            public class ExpressionDefinitions
            {
                public ArtOfTest.WebAii.Core.HtmlFindExpression MeldungAnlegenLink = new ArtOfTest.WebAii.Core.HtmlFindExpression("href=reportcreate.html", "tagname=a");
                public ArtOfTest.WebAii.Core.HtmlFindExpression AdministrationLink = new ArtOfTest.WebAii.Core.HtmlFindExpression("href=admin.html", "tagname=a");
                public ArtOfTest.WebAii.Core.HtmlFindExpression ITag = new ArtOfTest.WebAii.Core.HtmlFindExpression("TagIndex=i:0");
                public ArtOfTest.WebAii.Core.HtmlFindExpression AbmeldenLink = new ArtOfTest.WebAii.Core.HtmlFindExpression("href=/login.html", "tagname=a");
                public ArtOfTest.WebAii.Core.HtmlFindExpression MeldungLink = new ArtOfTest.WebAii.Core.HtmlFindExpression("href=reportshow.html", "tagname=a");
            }
        }
        public class FacManMeldungserfassungPage : HtmlPage
        {
            public FacManMeldungserfassungPage(string url, Find find) : 
                    base(url, find)
            {
            }
            /// <summary>
            /// Find expressions for this page
            /// </summary>
            public ExpressionDefinitions Expressions
            {
                get
                {
                    return new ExpressionDefinitions();
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' title] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText TitleText
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText>("name=title", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' Hauptgebaeude A]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv HauptgebaeudeADiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=Hauptgebaeude A", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' Bibliothek]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv BibliothekDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=Bibliothek", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' Defekt]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv DefektDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=Defekt", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' description] AND [tagname 'Exact' textarea]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlTextArea DescriptionTextArea
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlTextArea>("name=description", "tagname=textarea");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' terms] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputCheckBox TermsCheckBox
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputCheckBox>("name=terms", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'StartsWith' Die Meldung wur]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv DieMeldungDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=^Die Meldung wur", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' Alles klar!]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv AllesKlarDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=Alles klar!", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'StartsWith' Wählen Sie das ]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv WählenSieDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=^Wählen Sie das ", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' buildingDropdown] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv BuildingDropdownDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=buildingDropdown", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' roomDropdown] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv RoomDropdownDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=roomDropdown", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' categoryDropdown] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv CategoryDropdownDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=categoryDropdown", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' buildingDropdown][tagIndex 'Exact' div:2]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv HauptgebaeudeADiv0
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=buildingDropdown", "|", "tagIndex=div:2");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' roomDropdown][tagIndex 'Exact' div:2]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv BibliothekDiv0
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=roomDropdown", "|", "tagIndex=div:2");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' submitButton] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv SubmitButtonDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=submitButton", "tagname=div");
                }
            }
            public class ExpressionDefinitions
            {
                public ArtOfTest.WebAii.Core.HtmlFindExpression TitleText = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=title", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression HauptgebaeudeADiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Hauptgebaeude A", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression BibliothekDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Bibliothek", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression DefektDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Defekt", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression DescriptionTextArea = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=description", "tagname=textarea");
                public ArtOfTest.WebAii.Core.HtmlFindExpression TermsCheckBox = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=terms", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression DieMeldungDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=^Die Meldung wur", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression AllesKlarDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Alles klar!", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression WählenSieDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=^Wählen Sie das ", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression BuildingDropdownDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=buildingDropdown", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression RoomDropdownDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=roomDropdown", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression CategoryDropdownDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=categoryDropdown", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression HauptgebaeudeADiv0 = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=buildingDropdown", "|", "tagIndex=div:2");
                public ArtOfTest.WebAii.Core.HtmlFindExpression BibliothekDiv0 = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=roomDropdown", "|", "tagIndex=div:2");
                public ArtOfTest.WebAii.Core.HtmlFindExpression SubmitButtonDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=submitButton", "tagname=div");
            }
        }
        public class AdministrationPage : HtmlPage
        {
            public AdministrationPage(string url, Find find) : 
                    base(url, find)
            {
            }
            /// <summary>
            /// Find expressions for this page
            /// </summary>
            public ExpressionDefinitions Expressions
            {
                get
                {
                    return new ExpressionDefinitions();
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' a] AND [TextContent 'Exact' Räume]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor RäumeLink
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor>("TextContent=Räume", "tagname=a");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' reportForm][tagIndex 'Exact' div:21]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv EintragDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=reportForm", "|", "tagIndex=div:21");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' name] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText NameText
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText>("id=name", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' floor] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText FloorText
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText>("id=floor", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' Maxstrasse]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv MaxstrasseDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=Maxstrasse", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [TagIndex 'Exact' div:127]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv EintragDiv0
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TagIndex=div:127");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' a] AND [TextContent 'Exact' Gebäude]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor GebäudeLink
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlAnchor>("TextContent=Gebäude", "tagname=a");
                }
            }
            public class ExpressionDefinitions
            {
                public ArtOfTest.WebAii.Core.HtmlFindExpression RäumeLink = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Räume", "tagname=a");
                public ArtOfTest.WebAii.Core.HtmlFindExpression EintragDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=reportForm", "|", "tagIndex=div:21");
                public ArtOfTest.WebAii.Core.HtmlFindExpression NameText = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=name", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression FloorText = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=floor", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression MaxstrasseDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Maxstrasse", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression EintragDiv0 = new ArtOfTest.WebAii.Core.HtmlFindExpression("TagIndex=div:127");
                public ArtOfTest.WebAii.Core.HtmlFindExpression GebäudeLink = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Gebäude", "tagname=a");
            }
        }
        public class FacManLoginPage : HtmlPage
        {
            public FacManLoginPage(string url, Find find) : 
                    base(url, find)
            {
            }
            /// <summary>
            /// Find expressions for this page
            /// </summary>
            public ExpressionDefinitions Expressions
            {
                get
                {
                    return new ExpressionDefinitions();
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' username] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText UsernameText
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputText>("name=username", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [name 'Exact' password] AND [tagname 'Exact' input]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputPassword PasswordPassword
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlInputPassword>("name=password", "tagname=input");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' LoginButton] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv LoginButtonDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=LoginButton", "tagname=div");
                }
            }
            public class ExpressionDefinitions
            {
                public ArtOfTest.WebAii.Core.HtmlFindExpression UsernameText = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=username", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression PasswordPassword = new ArtOfTest.WebAii.Core.HtmlFindExpression("name=password", "tagname=input");
                public ArtOfTest.WebAii.Core.HtmlFindExpression LoginButtonDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=LoginButton", "tagname=div");
            }
        }
        public class FacManMeldungsübersichtPage : HtmlPage
        {
            public FacManMeldungsübersichtPage(string url, Find find) : 
                    base(url, find)
            {
            }
            /// <summary>
            /// Find expressions for this page
            /// </summary>
            public ExpressionDefinitions Expressions
            {
                get
                {
                    return new ExpressionDefinitions();
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' table][tagIndex 'Exact' td:10]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlTableCell x14112016TableCell
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlTableCell>("id=table", "|", "tagIndex=td:10");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' active]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv ActiveDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=active", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [tagname 'Exact' div] AND [TextContent 'Exact' Speichern]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv SpeichernDiv
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("TextContent=Speichern", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' popup] AND [tagname 'Exact' div]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv Popup_Modal
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlDiv>("id=popup", "tagname=div");
                }
            }
            /// <summary>
            /// Find logic 
            /// (Html): [id 'Exact' dropdownStat][tagIndex 'Exact' i:0]
            ///
            /// </summary>
            public ArtOfTest.WebAii.Controls.HtmlControls.HtmlControl ITag
            {
                get
                {
                    return Get<ArtOfTest.WebAii.Controls.HtmlControls.HtmlControl>("id=dropdownStat", "|", "tagIndex=i:0");
                }
            }
            public class ExpressionDefinitions
            {
                public ArtOfTest.WebAii.Core.HtmlFindExpression x14112016TableCell = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=table", "|", "tagIndex=td:10");
                public ArtOfTest.WebAii.Core.HtmlFindExpression ActiveDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=active", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression SpeichernDiv = new ArtOfTest.WebAii.Core.HtmlFindExpression("TextContent=Speichern", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression Popup_Modal = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=popup", "tagname=div");
                public ArtOfTest.WebAii.Core.HtmlFindExpression ITag = new ArtOfTest.WebAii.Core.HtmlFindExpression("id=dropdownStat", "|", "tagIndex=i:0");
            }
        }
    }
    public class Applications
    {
        private Manager _manager;
        public Applications(Manager manager)
        {
            _manager = manager;
        }
    }
}
