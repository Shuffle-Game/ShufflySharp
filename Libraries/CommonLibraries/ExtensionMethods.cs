﻿using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Text;

namespace CommonLibraries
{
    public static class ExtensionMethods
    {

        [InlineCode("{script}")]
        public static dynamic Inline(this object script)
        {
            return script;
        }
    }
}